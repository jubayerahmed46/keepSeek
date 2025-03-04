import { model, Schema } from "mongoose";

const ChatSchema = new Schema({
  email: { type: String, required: true },
  user: { type: String, required: true },
  ai: { type: String, required: true },
});

const Chat = model("chats", ChatSchema);

export default Chat;
