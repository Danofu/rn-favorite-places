import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from 'expo-location';
import { useState } from 'react';

import Colors from 'constants/colors';
import getMapPreview from 'util/location';
import OutlinedButton from 'components/UI/OutlinedButton';

function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInfo, requestPermission] = useForegroundPermissions();

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
    setPickedLocation({ lat: coords.latitude, lng: coords.longitude });
  };

  const pickOnMapHandler = () => {};

  let locationPreview = <Text>No location picked yet.</Text>

  if (pickedLocation) {
    locationPreview = <Image source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }} style={styles.image} />;
  }

  return (
    <View>
      <View style={styles.mapPreview}>
        {locationPreview}
      </View>
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
