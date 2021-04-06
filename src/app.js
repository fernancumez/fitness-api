import express from "express";
import config from "./config";
import morgan from "morgan";
import cors from "cors";

import exerciseRoutes from "./routes/exercise.routes";
import welcomeRoutes from "./routes/welcome.routes";

const app = express();

// Configurations
app.set("port", parseInt(config.PORT));

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(welcomeRoutes);
app.use("/api", exerciseRoutes);

export default app;
