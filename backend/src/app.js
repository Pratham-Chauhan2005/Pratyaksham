import express from "express";
import {createServer} from "node:http";
// import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectToSocket from "./controllers/SocketManager.js";
import userRoutes from "./routes/users.routes.js"


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.use(cors());
dotenv.config();

app.set("port",(process.env.PORT || 8000));

app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);

const start = async()=>{
    console.log("Mongo URI loaded:", process.env.MONGO_URI ? "YES" : "NO");

    const connectionDb = await mongoose.connect(process.env.MONGO_URI) 
    console.log(`Mongo Connected DB Host :${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log(`Listening to port ${app.get("port")}`);
    })
}
start();