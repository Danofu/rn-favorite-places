import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import IconButton from 'components/UI/IconButton';

function Map({ navigation, route }) {
  const initialLocation = route.params && { lat: route.params.initialLat, lng: route.params.initialLng };

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const region = {
    latitude: initialLocation ? initialLocation.lat : 52.157481207600476,
    longitude: initialLocation ? initialLocation.lng : 20.78718524426222,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    if (initialLocation) {
      return;
    }

    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat, lng });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert('No location picked !', 'You have to pick a location (by tapping on the map) first !');
      return;
    }

    navigation.navigate('AddPlace', { pickedLat: selectedLocation.lat, pickedLng: selectedLocation.lng });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }

    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton color={tintColor} icon="save" onPress={savePickedLocationHandler} size={24} />
      ),
    });
  }, [initialLocation, navigation, savePickedLocationHandler]);

  return (
    <MapView initialRegion={region} onPress={selectLocationHandler} style={styles.map}>
      {selectedLocation && (
        <Marker
          coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }}
          title="Picked Location"
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
