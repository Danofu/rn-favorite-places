import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from 'constants/colors';

function PlaceItem({ onSelect, place }) {
  return (
    <Pressable onPress={onSelect} style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  address: {
    color: Colors.gray700,
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: {
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    flex: 1,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  item: {
    alignItems: 'flex-start',
    backgroundColor: Colors.primary500,
    borderRadius: 6,
    elevation: 2,
    flexDirection: 'row',
    marginVertical: 12,
    shadowColor: 'black',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.9,
  },
  title: {
    color: Colors.gray700,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
