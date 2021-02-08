import { connect } from "mongoose";
import config from "./config";

export const startConnection = async () => {
  try {
    const URI = config.MONGODB_URI;
    const DBOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    await connect(URI, DBOptions);
    console.log("Database is connected!");
  } catch (err) {
    console.error(err);
  }
};
