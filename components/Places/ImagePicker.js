import { launchCameraAsync } from 'expo-image-picker';
import { View, Text, Button } from 'react-native';

function ImagePicker() {
  const takeImageHandler = async () => {
    const image = await launchCameraAsync({ allowsEditing: true, aspect: [16, 9], quality: 0.5 });
    console.log('[ ImagePicker ]: ', image);
  };

  return (
    <View>
      <View></View>
      <Button onPress={takeImageHandler} title="Take Image" />
    </View>
  );
}

export default ImagePicker;
