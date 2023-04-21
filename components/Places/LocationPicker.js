import { StyleSheet, View } from 'react-native';

import Colors from 'constants/colors';
import OutlinedButton from 'components/UI/OutlinedButton';

function LocationPicker() {
  const getLocationHandler = () => {};

  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={styles.mapPreview}></View>
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
  mapPreview: {
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    height: 200,
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%',
  },
})
