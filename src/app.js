import express from "express";
import config from "./config";
import morgan from "morgan";
import cors from "cors";

import exerciseRoutes from "./routes/exercise.routes";

const app = express();

// Configurations
app.set("port", config.PORT);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/exercises", exerciseRoutes);

export default app;
