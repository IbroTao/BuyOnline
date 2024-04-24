"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const configs_1 = require("../configs");
const connectDatabase = async () => {
    const connect = await mongoose_1.default.connect(`${configs_1.MONGO_URL}`, {
    // //useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
    });
    console.log(`MongoDB connected: ${configs_1.MONGO_URL}`);
};
exports.connectDatabase = connectDatabase;
