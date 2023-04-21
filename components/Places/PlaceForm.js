import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

import Button from 'components/UI/Button';
import Colors from 'constants/colors';
import ImagePicker from 'components/Places/ImagePicker';
import LocationPicker from 'components/Places/LocationPicker';

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState('');

  const changeTitleHandler = (enteredText) => setEnteredTitle(enteredText);

  const savePlaceHandler = () => {};

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput onChangeText={changeTitleHandler} style={styles.input} value={enteredTitle} />
      </View>
      <ImagePicker />
      <LocationPicker />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  input: {
    backgroundColor: Colors.primary100,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    fontSize: 16,
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  label: {
    color: Colors.primary500,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
