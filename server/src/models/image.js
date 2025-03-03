import { model, Schema } from "mongoose";

const ImageSchema = new Schema({
  email: { type: String, lowercase: true, required: true },
  prompt: { type: String, required: true },
  category: { type: String, required: true },
  created_at: { type: Date, required: true },
  image_url: { type: String, required: true },
  height: { type: Number, required: false },
  weight: { type: Number, required: false },
});

const Image = model("images", ImageSchema);
export default Image;
