import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import exercisesRoutes from "./routes/exercises";

const app = express();

app.set("port", config.PORT);
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/exercises", exercisesRoutes);

export default app;
