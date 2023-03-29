"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCounts = void 0;
__exportStar(require("./Courses"), exports);
__exportStar(require("./Blogs"), exports);
__exportStar(require("./Partnerships"), exports);
__exportStar(require("./Testimonials"), exports);
__exportStar(require("./ActivitiesEvents"), exports);
var AllCounts_1 = require("src/services/AllCounts");
Object.defineProperty(exports, "getAllCounts", { enumerable: true, get: function () { return __importDefault(AllCounts_1).default; } });
