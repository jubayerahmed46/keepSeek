import Image from "../../models/image.js";

async function updateImage(req, res) {
  await Image.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { public: true } },
    { upsert: true }
  );
  res.send({ status: 200, updatedCount: 1 });
}

export default updateImage;
