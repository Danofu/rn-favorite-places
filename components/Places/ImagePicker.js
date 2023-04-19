import { Alert, Button, View } from 'react-native';
import { PermissionStatus, launchCameraAsync, useCameraPermissions } from 'expo-image-picker';

function ImagePicker() {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

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
    console.log('[ ImagePicker ]:', image);
  };

  return (
    <View>
      <View></View>
      <Button onPress={takeImageHandler} title="Take Image" />
    </View>
  );
}

export default ImagePicker;
