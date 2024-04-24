"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./database/index");
const configs_1 = require("./configs");
const passport_1 = __importDefault(require("passport"));
const body_parser_1 = __importDefault(require("body-parser"));
//intialize passport
//require('./libs/passport');
const app = (0, express_1.default)();
const start = async () => {
    // connect to DB
    await (0, index_1.connectDatabase)();
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json({ limit: "50mb" }));
    app.use(passport_1.default.initialize());
    app.listen(configs_1.PORT, () => {
        console.log(`Server is running on ${configs_1.PORT}`);
    });
};
start();
