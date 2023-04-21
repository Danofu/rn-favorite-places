import PlaceForm from 'components/Places/PlaceForm';
import { insertPlace } from 'util/database';

function AddPlace({ navigation }) {
  const createPlaceHandler = async (place) => {
    const result = await insertPlace(place);
    console.log('[ AddPlace ]:', result);
    navigation.navigate('AllPlaces', { place });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
