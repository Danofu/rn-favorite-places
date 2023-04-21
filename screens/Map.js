import { Alert, StyleSheet } from 'react-native';
import { useCallback, useLayoutEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

import IconButton from 'components/UI/IconButton';

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = { latitude: 37.78, longitude: -122.43, latitudeDelta: 0.0922, longitudeDelta: 0.0421 };

  const selectLocationHandler = (event) => {
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
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton color={tintColor} icon="save" onPress={savePickedLocationHandler} size={24} />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

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
