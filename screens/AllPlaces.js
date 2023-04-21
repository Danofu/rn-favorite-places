import { useEffect, useState } from 'react';

import PlacesList from 'components/Places/PlacesList';

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    if (route.params) {
      setLoadedPlaces((prevLoadedPlaces) => [...prevLoadedPlaces, route.params.place]);
    }
  }, [route]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
