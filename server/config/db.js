import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("conneted to DB")
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;