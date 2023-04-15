import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddPlace from 'screens/AddPlace';
import AllPlaces from 'screens/AllPlaces';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={AllPlaces} name="AllPlaces" />
          <Stack.Screen component={AddPlace} name="AddPlace" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
