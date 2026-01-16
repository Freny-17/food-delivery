import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: {type:String,required:true},
    description: {type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
=======
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
});

const foodModel =
  mongoose.models.food || mongoose.model("food", foodSchema);
>>>>>>> 674e90e (Updated project with new backend, admin panel, and fixes)

export default foodModel;
