import "dotenv/config";
import Image from "../../models/image.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import aiReadableImg from "../../utils/aiReadableImg.js";
import instructions from "../../utils/instructions.js";
import Chat from "../../models/chats.js";
import generateHistoryContent from "../../utils/generateHistoryContent.js";

// TODO: install GoogleGenerativeAI and make instance. then declare model
const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAi.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: instructions,
});

async function chatWithAi(req, res) {
  const prompt = req.query.prompt;

  // TODO: get image detail from image by AI
  const img = await Image.findById(req.params.id);
  const image_url = img.image_url;

  const responseImageData = await aiReadableImg(image_url);
  // get details explanation
  const imgDetails = await model.generateContent([
    "explain the full image a to z withing 300 word, and structured way.",
    responseImageData,
  ]);

  const explanation = imgDetails.response.text();

  //  Old discussions
  const oldChats = await Chat.find({ email: req.body.email });

  const histories = generateHistoryContent(oldChats);

  const previousChats = model.startChat({
    history: histories,
  });
  // TODO: train the model, and give it necessary information
  // TODO: fetch image and get the image details and push it also
  const finalPrompt = `Here is the current image explanation : ${explanation} and here its other info that you have to provide user in structured way ${{
    prt: img.prompt,
  }} user previous conversations: ${histories} : |||| here is the user PROMPT: ${prompt}`;

  const replying = await previousChats.sendMessage(finalPrompt);
  const result = replying.response.text();

  // TODO: store the reply and userPrompt on the database and return it to the client
  const uploadChat = await Chat.create({
    user: prompt,
    ai: result,
    email: req.body.email,
  });

  res.send({ status: 200, reply: uploadChat, histories });
}

export default chatWithAi;
