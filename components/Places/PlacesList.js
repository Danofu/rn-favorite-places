import { FlatList, StyleSheet, Text, View } from 'react-native';

import PlaceItem from 'components/Places/PlaceItem';
import Colors from 'constants/colors';

function PlacesList({ places }) {
  if (!places || !places.length) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding some !</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
      style={styles.list}
    />
  );
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
  list: {
    margin: 24,
  },
});
