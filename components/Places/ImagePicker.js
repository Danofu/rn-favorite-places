import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { PermissionStatus, launchCameraAsync, useCameraPermissions } from 'expo-image-picker';
import { useState } from 'react';

import Colors from 'constants/colors';

function ImagePicker() {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState('');

  const verifyPermissions = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permissions !', 'You need to grand camera permissions to use this app.');
      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({ allowsEditing: true, aspect: [16, 9], quality: 0.5 });
    setPickedImage(image.assets[0].uri);
  };

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button onPress={takeImageHandler} title="Take Image" />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
    height: '100%',
    width: '100%',
  },
  imagePreview: {
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    height: 200,
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%',
  },
});
