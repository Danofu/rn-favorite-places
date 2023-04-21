const GOOGLE_API_KEY = 'AIzaSyARsBHr9Xbci4HQ7C0TYWSMWU8d7X3Cncs';

export default (lat, lng) =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
