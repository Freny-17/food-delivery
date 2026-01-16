import express from "express"
import { addFood,listfood,removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

<<<<<<< HEAD
//img store 

=======
// img store
>>>>>>> 674e90e (Updated project with new backend, admin panel, and fixes)
const storage = multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listfood)
foodRouter.post("/remove",removeFood)

<<<<<<< HEAD



export default foodRouter;
=======
export default foodRouter;
>>>>>>> 674e90e (Updated project with new backend, admin panel, and fixes)
