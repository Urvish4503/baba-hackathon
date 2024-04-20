import express from "express";
import {
    courseDetail1,
    courseDetail3,
    createCourse,
    createFaculty,
    getSectionDetails,
    storeSectionDetails,
} from "../controllers/courses";

const courseRoute = express.Router();

// get course
courseRoute.get("/summaryCourse", courseDetail1);
courseRoute.get("/deatiledCourse/:courseId", courseDetail3);

// add course
courseRoute.post("/add", createCourse);

// put quiz
courseRoute.post("/sections/:sectionId/questions", storeSectionDetails);

// get quiz
courseRoute.get("/sections/:sectionId/questions", getSectionDetails);

// tamparory
courseRoute.post("/addFaculty", createFaculty);

export default courseRoute;
