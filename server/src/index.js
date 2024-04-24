"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    // connect to DB
    yield (0, index_1.connectDatabase)();
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json({ limit: "50mb" }));
    app.use(passport_1.default.initialize());
    app.listen(configs_1.PORT, () => {
        console.log(`Server is running on ${configs_1.PORT}`);
    });
});
start();
