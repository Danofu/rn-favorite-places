import { useEffect, useState } from 'react';

import PlacesList from 'components/Places/PlacesList';
import { fetchPlaces } from 'util/database';

function AllPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    (async () => {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    })();
  }, []);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
