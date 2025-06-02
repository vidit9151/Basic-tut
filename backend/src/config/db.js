import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("🟢 mongoDB connected successfully");
  } catch (error) {
    console.error("🔴 error connecting to mongo DB ", error);
    process.exit(1); //exit with failure
  }
};
