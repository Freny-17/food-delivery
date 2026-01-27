import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      family: 4,
      tls: true,
      retryWrites: true,
      w: "majority",
      serverSelectionTimeoutMS: 5000,
    });

    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
