"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCounts = exports.getInfographicTimelines = void 0;
var InfographicTimelines_1 = require("./InfographicTimelines");
Object.defineProperty(exports, "getInfographicTimelines", { enumerable: true, get: function () { return __importDefault(InfographicTimelines_1).default; } });
var AllCounts_1 = require("src/services/AllCounts");
Object.defineProperty(exports, "getAllCounts", { enumerable: true, get: function () { return __importDefault(AllCounts_1).default; } });
