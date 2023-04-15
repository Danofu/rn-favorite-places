export default class Place {
  constructor(address, imageUri, location, title) {
    this.address = address;
    this.id = new Date().toString() + Math.random().toString();
    this.imageUri = imageUri;
    this.location = location;
    this.title = title;
  }
}
