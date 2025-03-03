import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/keepseek-ai-db";

function connectDB() {
  return mongoose.connect(uri);
}

export default connectDB;
