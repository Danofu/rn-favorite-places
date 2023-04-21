import PlaceForm from 'components/Places/PlaceForm';

function AddPlace({ navigation }) {
  const createPlaceHandler = (place) => {
    navigation.navigate('AllPlaces', { place });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
