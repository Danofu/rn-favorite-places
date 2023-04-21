import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import IconButton from 'components/UI/IconButton';
import Colors from 'constants/colors';
import AddPlace from 'screens/AddPlace';
import AllPlaces from 'screens/AllPlaces';
import Map from 'screens/Map';
import PlaceDetails from 'screens/PlaceDetails';
import { init } from 'util/database';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await init();
        setDbInitialized(true);
      } finally {
        await SplashScreen.hideAsync();
      }
    })();
  }, []);

  if (!dbInitialized) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: Colors.gray700 },
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
          }}
        >
          <Stack.Screen
            component={AllPlaces}
            name="AllPlaces"
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton color={tintColor} icon="add" onPress={() => navigation.navigate('AddPlace')} size={24} />
              ),
              title: 'Your Favourite Places',
            })}
          />
          <Stack.Screen component={AddPlace} name="AddPlace" options={{ title: 'Add a new Place' }} />
          <Stack.Screen component={Map} name="Map" />
          <Stack.Screen component={PlaceDetails} name="PlaceDetails" options={{ title: 'Loading Place ...' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
