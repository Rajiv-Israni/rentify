import * as SQLITE from "expo-sqlite";
import { Ad } from "../../models/ad";

const database = SQLITE.openDatabaseAsync("ads.db");

export async function init() {
  return (await database).execAsync(`CREATE TABLE IF NOT EXISTS ads (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          location NVARCHAR NOT NULL
        )`);
}

export async function insertAd(ad) {
  return (await database).runAsync(
    `INSERT INTO ads (title, imageUri, address, location) VALUES (?, ?, ?, {lat: ?, lng: ?})`,
    [ad.title, ad.imageUri, ad.address, ad.location]
  );
}

export async function fetchAds() {
  const ads = [];
  (await database).getAllAsync("SELECT * FROM ads", []).then((res) => {
    // console.log(res);
    for (const dp of res) {
      console.log(dp.location);
      ads.push(
        new Ad(
          dp.title,
          dp.imageUri,
          {
            address: dp.address,
            lat: dp.location.lat,
            lng: dp.location.lng,
          },
          dp.id
        )
      );
    }
  });
  return ads;
}
