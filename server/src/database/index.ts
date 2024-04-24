require('dotenv').config();
import mongoose from "mongoose";

export const connectDatabase = async () => {
    const connect = await mongoose.connect(`${process.env.MONGO_URL}`, {
        // //useNewUrlParser: true,
        // useCreateIndex: true,
        // useUnifiedTopology: true
    });

    console.log(`MongoDB connected: ${process.env.MONGO_URL}`)
}