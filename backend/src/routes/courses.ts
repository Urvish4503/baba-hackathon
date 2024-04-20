import express from "express";
import {
    courseDetail1,
    courseDetail3,
    createCourse,
    createFaculty,
} from "../controllers/courses";

const courseRoute = express.Router();

// get course
courseRoute.get("/summaryCourse", courseDetail1);
courseRoute.get("/deatiledCourse", courseDetail3);

// add course
courseRoute.post("/add", createCourse);

// get quiz

// tamparory
courseRoute.post("/addFaculty", createFaculty);

export default courseRoute;
