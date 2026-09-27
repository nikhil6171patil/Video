import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";
import {status} from "http-status"
import cors from "cors";
import http from 'http';
import { connectToSocket } from "./controllers/socketManage.js";

import dotenv from "dotenv" ;
import { createServer } from "vite";
import { log } from "console";
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = connectToSocket(server);

app.set("port" ,process.env.PORT || 3000 ) ;
app.use(cors()); // error for allow http cross origin  // testing ip sets
app.use(express.json({limit:"40kb"})) // limit: payload
app.use(express.urlencoded({limit:"40kb", extended : true}));

app.get("/home",(req,res)=>{
    res.json({massage:"hello user"})
})



const start = async () => {
    app.set("mongo_user")
    const mongoDBconection = await mongoose.connect(process.env.MONGO_DB)
    console.log(`Mongo connected DB Host: ${mongoDBconection.connection.host}`);
    
    server.listen(app.get("port"),()=>{
        console.log(`app is listening  port ${app.get("port")} `);
        
    })
}

start();