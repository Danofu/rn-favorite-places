import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddPlace from 'screens/AddPlace';
import AllPlaces from 'screens/AllPlaces';
import IconButton from 'components/UI/IconButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={AllPlaces} name="AllPlaces" options={{ headerRight: AllPlacesHeaderRight }} />
          <Stack.Screen component={AddPlace} name="AddPlace" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function AllPlacesHeaderRight({ tintColor }) {
  const { navigate } = useNavigation();
  return <IconButton color={tintColor} icon="add" onPress={() => navigate('AddPlace')} size={24} />;
}
