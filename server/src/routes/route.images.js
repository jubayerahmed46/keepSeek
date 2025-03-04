import express from "express";
import generateImage from "../controllers/images/generateImage.js";
import getUserImages from "../controllers/images/getUserImages.js";
import updateImage from "../controllers/images/updateImage.js";
import getPublicImages from "../controllers/images/getPublicImages.js";
import getImage from "../controllers/images/getImage.js";
import chatWithAi from "../controllers/images/chatWithAi.js";
import allChats from "../controllers/images/allChats.js";

const router = express.Router();

router.post("/", generateImage);
router.get("/:email", getUserImages);
router.get("/", getPublicImages);
router.get("/image/:id", getImage);
router.post("/chat/:id", chatWithAi);
router.get("/all-chat/:email", allChats);

router.patch("/public/:id", updateImage);

export default router;
