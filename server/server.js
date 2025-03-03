import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/connectDB.js";

const port = process.env.PORT || 4002;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Wow!, server running port on: ${port}`);
  });
});
