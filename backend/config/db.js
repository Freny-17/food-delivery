import mongoose from "mongoose";

<<<<<<< HEAD
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://frenysorathiya:aCPL1DIKzTZoghZ7@cluster0.tfns0ff.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
=======
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
>>>>>>> 674e90e (Updated project with new backend, admin panel, and fixes)
