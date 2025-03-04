import axios from "axios";

async function aiReadableImg(image_url) {
  // TODO: get user image buffer array using axios
  const response = await axios(image_url, { responseType: "arraybuffer" });

  // make image ai readable and convert sting base64 ( png format )
  const responseData = {
    inlineData: {
      data: Buffer.from(response.data).toString("base64"),
      mimeType: "image/png",
    },
  };

  return responseData;
}

export default aiReadableImg;
