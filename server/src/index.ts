require('dotenv').config();

import express from "express";
import cors from "cors";
import {connectDatabase} from "./database/index";
import {PORT} from "./configs";
import passport from "passport";
import bodyParser from "body-parser";

//intialize passport
//require('./libs/passport');

const app = express();

const start = async() => {
    // connect to DB
    await connectDatabase();

    app.use(cors());
    app.use(bodyParser.json({limit: "50mb"}));
    app.use(passport.initialize());

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })      
};

start()

