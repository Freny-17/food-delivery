import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food items
<<<<<<< HEAD

const addFood = async (req,res) =>{
    
    let image_filename = `${req.file.filename}`;

    

=======
const addFood = async (req,res) =>{
    let image_filename = `${req.file.filename}`;

>>>>>>> 674e90e (Updated project with new backend, admin panel, and fixes)
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error) 
        res.json({success:false,message:"Error"})
    }
}

<<<<<<< HEAD
//list food
=======
// list food
>>>>>>> 674e90e (Updated project with new backend, admin panel, and fixes)
const listfood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

<<<<<<< HEAD
//remove item

const removeFood = async (req,res) => {
    try {
        const foods = await foodModel.findById(req.body.id);
        // res.json({success:true,data:foods})
=======
// remove food
const removeFood = async (req,res) => {
    try {
        const foods = await foodModel.findById(req.body.id);
>>>>>>> 674e90e (Updated project with new backend, admin panel, and fixes)
        fs.unlink(`upload/${foods.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
<<<<<<< HEAD
=======

>>>>>>> 674e90e (Updated project with new backend, admin panel, and fixes)
export {addFood,listfood,removeFood}
