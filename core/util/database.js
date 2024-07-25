import * as SQLITE from "expo-sqlite";
import { Ad } from "../../models/ad";

const database = SQLITE.openDatabaseAsync("ads.db");

export async function init() {
  return (await database).execAsync(`CREATE TABLE IF NOT EXISTS ads (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`);
}

export async function insertAd(ad) {
  return (await database).runAsync(
    `INSERT INTO ads (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
    [ad.title, ad.imageUri, ad.address, ad.location.lat, ad.location.lng]
  );
}

export async function fetchAds() {
  return (await database).getAllAsync("SELECT * FROM ads", []).then((res) => {
    const ads = [];
    for (const dp of res) {
      ads.push(
        new Ad(
          dp.title,
          dp.imageUri,
          {
            address: dp.address,
            lat: dp.lat,
            lng: dp.lng,
          },
          dp.id
        )
      );
    }
    return ads;
  });
}

export async function fetchAdDetails(id) {
  return (await database)
    .getAllAsync("SELECT * FROM ads WHERE id = ?", [id])
    .then((res) => {
      const dbAd = res[0];
      const ad = new Ad(
        dbAd.title,
        dbAd.imageUri,
        {
          address: dbAd.address,
          lat: dbAd.lat,
          lng: dbAd.lng,
        },
        dbAd.id
      );
      return ad;
    });
}
