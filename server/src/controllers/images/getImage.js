import Image from "../../models/image.js";

async function getImage(req, res) {
  const result = await Image.findById(req.params.id);

  res.send({ status: 200, image: result });
}

export default getImage;
