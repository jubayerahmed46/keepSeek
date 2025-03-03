import Image from "../../models/image.js";

async function getUserImages(req, res) {
  const email = req.params.email;

  const data = await Image.where("email")
    .equals(email)
    .select({ _id: 1, prompt: 1, category: 1, created_at: 1, image_url: 1 });

  res.send({ status: 200, data });
}

export default getUserImages;
