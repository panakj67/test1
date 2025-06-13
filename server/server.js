import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js';
import upload from './config/multer.js';
import dotenv  from 'dotenv'
dotenv.config();

import userRouter from './routes/userRouter.js'
const app = express();

connectDB()

app.use(express.json())

app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))

app.use("/user/api" , userRouter);



app.listen(3000, () => {
    console.log("Server is running on PORT 3000")
})