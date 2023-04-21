import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddPlace from 'screens/AddPlace';
import AllPlaces from 'screens/AllPlaces';
import Colors from 'constants/colors';
import IconButton from 'components/UI/IconButton';
import Map from 'screens/Map';

const Stack = createNativeStackNavigator();

export default function App() {
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
            options={{ headerRight: AllPlacesHeaderRight, title: 'Your Favourite Places' }}
          />
          <Stack.Screen component={AddPlace} name="AddPlace" options={{ title: 'Add a new Place' }} />
          <Stack.Screen component={Map} name="Map" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function AllPlacesHeaderRight({ tintColor }) {
  const { navigate } = useNavigation();
  return <IconButton color={tintColor} icon="add" onPress={() => navigate('AddPlace')} size={24} />;
}
