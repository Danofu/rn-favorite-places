const GOOGLE_API_KEY = 'AIzaSyARsBHr9Xbci4HQ7C0TYWSMWU8d7X3Cncs';

export const getMapPreview = (lat, lng) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

export const getAddress = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch address !');
  }

  const { results } = await response.json();
  return results[0].formatted_address;
};
