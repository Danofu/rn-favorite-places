import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import OutlinedButton from 'components/UI/OutlinedButton';
import Colors from 'constants/colors';
import { useEffect } from 'react';

function PlaceDetails({ route }) {
  const showOnMapHandler = () => {};

  useEffect(() => {
    const selectedPlaceId = route.params.placeId;
  }, [route]);

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>ADDRESS</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  address: {
    color: Colors.primary500,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
