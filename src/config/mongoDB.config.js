
import mongoose from "mongoose";

export const connectMongoDB = async() =>{
    try{
        mongoose.connect("mongodb+srv://admin:Maximiliano2000%40@coder-backend.aurqmzg.mongodb.net/CoderBackend");
        console.log("Mongo DB connect")
    }catch(error){
        console.log(`Error al conectar a MongoDB: ${error}`)
    }
}