// import ('dotenv').config({path : './env'})
import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDb()

















/*
import express from "express";
const app = express()

;( async () =>{  //IIFE - Immediately Invoked Function Expression for conecting to the database
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error:" , error);
        })

        app.listen(process.env.PORT , () =>{
            console.log(`App is listening on ${process.env.PORT}`)
        })
    }catch (error){
        console.error("Error" , error)
        throw error
    }
})()

*/