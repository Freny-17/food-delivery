import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://frenysorathiya:VimCtWpyu2duTsFW@cluster0.kvx0u2f.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}