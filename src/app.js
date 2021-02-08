import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import exerciseRoutes from "./routes/exercise.routes";

const app = express();

app.set("port", config.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

app.use("/api/exercises", exerciseRoutes);

export default app;
