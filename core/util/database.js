import * as SQLITE from "expo-sqlite";

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
    `INSERT INTO ads (title, imageUri, address, location) VALUES (?, ?, ?, ?)`,
    [ad.title, ad.imageUri, ad.address, ad.location]
  );
}
