import { useNavigation, useRoute } from '@react-navigation/native';
import { PermissionStatus, getCurrentPositionAsync, useForegroundPermissions } from 'expo-location';
import { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';

import OutlinedButton from 'components/UI/OutlinedButton';
import Colors from 'constants/colors';
import { getAddress, getMapPreview } from 'util/location';

function LocationPicker({ onLocationPicked }) {
  const [locationPermissionInfo, requestPermission] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const verifyPermissions = async () => {
    if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permissions !', 'You need to grand location permissions to use this app.');
      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const { coords } = await getCurrentPositionAsync();
    const location = {
      address: await getAddress(coords.latitude, coords.longitude),
      lat: coords.latitude,
      lng: coords.longitude,
    };
    setPickedLocation(location);
    onLocationPicked(location);
  };

  const pickOnMapHandler = () => navigate('Map');

  useEffect(() => {
    (async () => {
      const mapPickedLocation = params && { lat: params.pickedLat, lng: params.pickedLng };
      if (mapPickedLocation) {
        const location = {
          address: await getAddress(mapPickedLocation.lat, mapPickedLocation.lng),
          ...mapPickedLocation,
        };
        setPickedLocation(location);
        onLocationPicked(location);
      }
    })();
  }, [onLocationPicked, params]);

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }} style={styles.image} />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    borderRadius: 4,
    height: '100%',
    width: '100%',
  },
  mapPreview: {
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    height: 200,
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%',
  },
});
