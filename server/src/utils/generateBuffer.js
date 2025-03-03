import "dotenv/config";

async function generateBuffer(finalPrompt) {
  const form = new FormData();
  form.append("prompt", finalPrompt);

  const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
    method: "POST",
    headers: {
      "x-api-key": process.env.CD_API_KEY,
    },
    body: form,
  });

  const buffer = await response.arrayBuffer();
  return buffer;
}

export default generateBuffer;
