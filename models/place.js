export default class Place {
  constructor(id, imageUri, location, title) {
    this.address = location.address;
    this.id = id;
    this.imageUri = imageUri;
    this.location = { lat: location.lat, lng: location.lng };
    this.title = title;
  }
}
