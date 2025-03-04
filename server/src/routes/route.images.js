import express from "express";
import generateImage from "../controllers/images/generateImage.js";
import getUserImages from "../controllers/images/getUserImages.js";
import updateImage from "../controllers/images/updateImage.js";
import getPublicImages from "../controllers/images/getPublicImages.js";

const router = express.Router();

router.post("/", generateImage);
router.get("/:email", getUserImages);
router.get("/", getPublicImages);
router.patch("/public/:id", updateImage);

export default router;
