import { FlatList, StyleSheet, Text, View } from 'react-native';

import Colors from 'constants/colors';
import PlaceItem from 'components/Places/PlaceItem';

function PlacesList({ places }) {
  if (!places || !places.length) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding some !</Text>
      </View>
    );
  }

  return <FlatList data={places} keyExtractor={(item) => item.id} renderItem={PlacesListItem} />;
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fallbackText: {
    color: Colors.primary200,
    fontSize: 16,
  },
});

function PlacesListItem({ item }) {
  return <PlaceItem place={item} />;
}
