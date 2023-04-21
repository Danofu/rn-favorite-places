import { StyleSheet } from 'react-native';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

function Map() {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = { latitude: 37.78, longitude: -122.43, latitudeDelta: 0.0922, longitudeDelta: 0.0421 };

  const selectLocationHandler = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat, lng });
  };

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
