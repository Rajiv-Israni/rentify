import * as SQLITE from "expo-sqlite";

const database = SQLITE.openDatabaseAsync("ads.db");

export async function init() {
  return (await database).execAsync(`CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`);
}
