import * as SQLite from 'expo-sqlite';

import Place from 'models/place';

const database = SQLite.openDatabase('places.db');

export const init = () =>
  new Promise((resolve, reject) => {
    database.transaction((transaction) =>
      transaction.executeSql(
        `
          CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            address TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL,
            title TEXT NOT NULL
          );
        `,
        [],
        () => resolve(),
        (_, error) => reject(error)
      )
    );
  });

export const insertPlace = (place) =>
  new Promise((resolve, reject) => {
    database.transaction((transaction) =>
      transaction.executeSql(
        `
          INSERT INTO places (address, imageUri, lat, lng, title)
          VALUES (?, ?, ?, ?, ?);
        `,
        [place.address, place.imageUri, place.location.lat, place.location.lng, place.title],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    );
  });

export const fetchPlaces = () =>
  new Promise((resolve, reject) => {
    database.transaction((transaction) =>
      transaction.executeSql(
        `SELECT * FROM places;`,
        [],
        (_, result) => {
          const places = result.rows._array.map(
            ({ address, id, imageUri, lat, lng, title }) => new Place(id, imageUri, { address, lat, lng }, title)
          );
          resolve(places);
        },
        (_, error) => reject(error)
      )
    );
  });

export const fetchPlaceDetails = (id) =>
  new Promise((resolve, reject) => {
    database.transaction((transaction) =>
      transaction.executeSql(
        'SELECT * FROM places WHERE id=?',
        [id],
        (_, result) => resolve(result.rows._array[0]),
        (_, error) => reject(error)
      )
    );
  });
