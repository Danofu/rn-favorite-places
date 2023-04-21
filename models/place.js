export default class Place {
  constructor(imageUri, location, title) {
    this.address = location.address;
    this.id = new Date().toString() + Math.random().toString();
    this.imageUri = imageUri;
    this.location = { lat: location.lat, lng: location.lng };
    this.title = title;
  }
}
