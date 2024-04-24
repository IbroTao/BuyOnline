import mongoose from "mongoose";
import {MONGO_URL} from "../configs";

export const connectDatabase = async () => {
    const connect = await mongoose.connect(`${MONGO_URL}`, {
        // //useNewUrlParser: true,
        // useCreateIndex: true,
        // useUnifiedTopology: true
    });

    console.log(`MongoDB connected: ${MONGO_URL}`)
}