import express from "express";
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN ,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended:true ,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// routes

import userRouter from "./routes/user.routes.js"

//routes declaration

app.use("/api/v1/users",userRouter)  // routes along with api and version

export {app}

// multer ka use krke local server pe file ko rakh denge wahn se cloudnary smahal lega
