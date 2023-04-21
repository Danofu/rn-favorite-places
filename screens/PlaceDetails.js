import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import OutlinedButton from 'components/UI/OutlinedButton';
import Colors from 'constants/colors';
import { fetchPlaceDetails } from 'util/database';

function PlaceDetails({ navigation, route }) {
  const [fetchedPlace, setFetchedPlace] = useState();

  const showOnMapHandler = () => {};

  useEffect(() => {
    (async () => {
      const selectedPlaceId = route.params.placeId;
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({ title: place.title });
    })();
  }, [navigation, route]);

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data ...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image source={{ uri: fetchedPlace.imageUri }} style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
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
  fallback: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
