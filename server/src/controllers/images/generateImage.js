import "dotenv/config";
import generateBuffer from "../../utils/generateBuffer.js";
import generateImgUrl from "../../utils/generateImgUrl.js";
import Image from "../../models/image.js";

async function generateImage(req, res) {
  try {
    const { category, prompt, user_email } = req.body;
    // make final prompt
    const finalPrompt = `imagine a ${category} : ${prompt}`;

    // create bufferArray using ClipDrop passing the prompt
    const buffer = await generateBuffer(finalPrompt);

    // host buffer on imageBB || cloudinary and get image url
    const { image } = await generateImgUrl(buffer, prompt);

    // upload image details and user email on database using mongoose
    const doc = await Image.create({
      email: user_email,
      prompt,
      category,
      created_at: new Date().toISOString(),
      image_url: image.url,
      height: image.height,
      weight: image.weight,
    });

    console.log(doc);

    res.send({ done: "image generated successfully!", doc });
  } catch (err) {
    console.log(err);
  }
}

export default generateImage;
