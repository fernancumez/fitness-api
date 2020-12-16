import { config } from "dotenv";

process.env.NODE_ENV !== "production" ? config() : "";

const Config = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/fitenessapp",
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 4000,
};

export default Config;
