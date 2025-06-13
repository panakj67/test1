import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js';

import upload from './config/multer.js';
import dotenv  from 'dotenv'
dotenv.config();

import userRouter from './routes/userRouter.js'
import cookieParser from 'cookie-parser';
const app = express();

connectDB()

app.use(express.json())
app.use(cookieParser);

app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))

app.use("/user/api" , userRouter);

app.get("/", (req, res) => {
    res.send("api is working");
})

app.listen(3000, () => {
    console.log("Server is running on PORT 3000")
})