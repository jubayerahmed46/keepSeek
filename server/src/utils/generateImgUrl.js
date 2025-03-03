import "dotenv/config";

async function generateImgUrl(buffer, prompt) {
  const imageForm = new FormData();
  imageForm.append(
    "file",
    new Blob([buffer], { type: "image/jpeg" }),
    `${prompt}.jpeg`
  );
  imageForm.append("upload_preset", process.env.PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: imageForm,
    }
  );
  const imageDetails = await res.json();
  return {
    image: {
      url: imageDetails.url,
      width: imageDetails.width,
      height: imageDetails.height,
      prompt: imageDetails.original_filename,
    },
  };
}

export default generateImgUrl;
