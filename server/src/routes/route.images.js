import express from "express";
import generateImage from "../controllers/images/generateImage.js";
import getUserImages from "../controllers/images/getUserImages.js";
import updateImage from "../controllers/images/updateImage.js";

const router = express.Router();

router.post("/", generateImage);
router.get("/:email", getUserImages);
router.patch("/public/:id", updateImage);
export default router;
