import { connect, connection } from "mongoose";
import config from "./config";

export const startConnection = async () => {
  try {
    const databaseOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    await connect(config.DATABASE_URL, databaseOptions);
    console.log("Database is connected!");
    console.log(connection.name);
  } catch (err) {
    console.error(err);
  }
};
