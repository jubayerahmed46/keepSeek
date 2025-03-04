import Chat from "../../models/chats.js";

async function allChats(req, res) {
  const result = await Chat.find({ email: req.params.email });

  res.send({ status: 200, chats: result });
}

export default allChats;
