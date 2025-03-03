import express from "express";
import generateImage from "../controllers/images/generateImage.js";
import getUserImages from "../controllers/images/getUserImages.js";

const router = express.Router();

router.post("/", generateImage);
router.get("/:email", getUserImages);
export default router;
