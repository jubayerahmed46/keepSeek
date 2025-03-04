import Image from "../../models/image.js";

async function getPublicImages(_, res) {
  const data = await Image.find({ public: true });

  res.send({ status: 200, data });
}

export default getPublicImages;
