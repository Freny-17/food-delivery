import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://frenysorathiya:aCPL1DIKzTZoghZ7@cluster0.tfns0ff.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}