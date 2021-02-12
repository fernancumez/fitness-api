import { connect, connection } from "mongoose";
import config from "./config";

export const startConnection = async () => {
  try {
    const URI = config.DATABASE_URL;
    const DBOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    await connect(URI, DBOptions);
    console.log("Database is connected!");
    console.log(connection.name);
  } catch (err) {
    console.error(err);
  }
};
