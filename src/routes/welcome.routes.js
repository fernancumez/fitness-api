import { Router } from "express";
const router = Router();

router.route("/").get((req, res) => res.send({ message: "Hello world!" }));

router.route("/api").get((req, res) => res.send({ message: "Hello world!" }));

export default router;
