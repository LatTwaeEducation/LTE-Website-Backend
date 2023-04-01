"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogs = exports.getPartnerships = exports.getTestimonials = exports.getActivitiesEvents = exports.getCourses = exports.getAllCounts = void 0;
var AllCounts_1 = require("src/services/AllCounts");
Object.defineProperty(exports, "getAllCounts", { enumerable: true, get: function () { return __importDefault(AllCounts_1).default; } });
var Courses_1 = require("./Courses");
Object.defineProperty(exports, "getCourses", { enumerable: true, get: function () { return __importDefault(Courses_1).default; } });
var ActivitiesEvents_1 = require("./ActivitiesEvents");
Object.defineProperty(exports, "getActivitiesEvents", { enumerable: true, get: function () { return __importDefault(ActivitiesEvents_1).default; } });
var Testimonials_1 = require("./Testimonials");
Object.defineProperty(exports, "getTestimonials", { enumerable: true, get: function () { return __importDefault(Testimonials_1).default; } });
var Partnerships_1 = require("./Partnerships");
Object.defineProperty(exports, "getPartnerships", { enumerable: true, get: function () { return __importDefault(Partnerships_1).default; } });
var Blogs_1 = require("./Blogs");
Object.defineProperty(exports, "getBlogs", { enumerable: true, get: function () { return __importDefault(Blogs_1).default; } });
