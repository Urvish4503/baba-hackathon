import { Request, Response } from "express";
import {
    createCourseSchema,
    createCourseType,
    moduleType,
    courseSummaryType,
    createFacultyType,
    createFacultySchema,
    sectionDetailSchema,
    questionsSchema,
    QuestionsType,
} from "../models/types";
import prisma from "../lib/prisma";

// create faculty
export const createFaculty = async (req: Request, res: Response) => {
    try {
        // Validate the request body
        const requestBody = createFacultySchema.safeParse(req.body);

        // Check if validation failed
        if (!requestBody.success) {
            return res.status(400).json({
                message: "Invalid request body",
                errors: requestBody.error.flatten(),
            });
        }

        // Extract the data from the validated request body
        const facultyData = requestBody.data;

        // Create the faculty in the database
        const createdFaculty = await prisma.faculty.create({
            data: {
                firstName: facultyData.firstName,
                lastName: facultyData.lastName,
                email: facultyData.email,
                password: facultyData.password,
            },
        });

        // Return a success response
        return res.status(201).json({
            message: "Faculty created successfully",
            faculty: createdFaculty,
        });
    } catch (error) {
        // Handle any errors that occur during faculty creation
        console.error("Error creating faculty:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// get course details
export const courseDetail1 = async (req: Request, res: Response) => {
    try {
        // Fetch course summary details
        const Fetchcourse = await prisma.course.findMany({
            select: {
                id: true,
                title: true,
                category: true,
                //description: true,
                //level: true,
                thumbnailKey: true,
            },
        });

        // Return the course summary details
        res.status(200).json({ Fetchcourse });
    } catch (error) {
        console.error("Error fetching course summary:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// detiled course by id
export const courseDetail3 = async (req: Request, res: Response) => {
    try {
        const courseId = parseInt(req.params.courseId); // Extract course ID from request parameters

        // Fetch the course details based on the provided course ID
        const course = await prisma.course.findUnique({
            where: { id: courseId }, // Filter by course ID
            select: {
                title: true,
                category: true,
                description: true,
                outcomes: true,
                level: true,
                thumbnailKey: true,
                Module: {
                    select: {
                        id: true,
                        sections: {
                            select: {
                                id: true,
                                title: true,
                                videoKey: true,
                            },
                        },
                    },
                },
            },
        });

        // Return the course details
        if (course) {
            res.status(200).json({ course });
        } else {
            res.status(404).json({ error: "Course not found" });
        }
    } catch (error) {
        console.error("Error fetching course details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// create course
export const createCourse = async (req: Request, res: Response) => {
    try {
        const requestBody = createCourseSchema.safeParse(req.body);

        if (!requestBody.success) {
            return res.status(400).json({
                message: "Incorrect inputs",
                errors: requestBody.error.flatten(),
            });
        }

        const courseData: createCourseType = requestBody.data;

        //console.log(courseData);

        const createdCourse = await prisma.course.create({
            data: {
                title: courseData.title,
                category: courseData.category,
                description: courseData.description,
                outcomes: courseData.outcomes,
                level: courseData.level,
                createdBy: { connect: { id: courseData.createdBy } },
                thumbnailKey: courseData.thumbnailKey,
            },
        });

        //console.log("/n/n");
        //console.log("courseData.modules");

        for (const moduleData of courseData.modules) {
            const createdModule = await prisma.module.create({
                data: {
                    courseId: createdCourse.id,
                },
            });

            //console.log("/n/n");
            //console.log("moduleData.sections");

            // Step 3: Create sections for each module
            for (const sectionData of moduleData.sections) {
                await prisma.section.create({
                    data: {
                        ...sectionData,
                        moduleId: createdModule.id,
                    },
                });
            }
        }

        res.status(201).json({
            message: "Course created successfully",
            course: createdCourse,
        });
    } catch (error) {
        console.error("Error creating course:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// get quiz on based on Id
export const getSectionDetails = async (req: Request, res: Response) => {
    try {
        const requestBody = sectionDetailSchema.safeParse(req.body);

        if (!requestBody.success) {
            return res.status(400).json({
                message: "Incorrect inputs",
                errors: requestBody.error.flatten(),
            });
        }
        const { courseId, moduleId, sectionId } = req.body; // Extract courseId, moduleId, and sectionId from request body

        // Fetch the section details based on the provided IDs
        const section = await prisma.section.findUnique({
            where: { id: sectionId },
            include: {
                questions: {
                    select: {
                        question: true,
                        options: true,
                        answers: true,
                    },
                },
            },
        });

        // Check if the section exists
        if (section) {
            res.status(200).json({ section });
        } else {
            res.status(404).json({ error: "Section not found" });
        }
    } catch (error) {
        console.error("Error fetching section details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// add quiz
export const storeSectionDetails = async (req: Request, res: Response) => {
    try {
        const sectionId = parseInt(req.params.sectionId);
        const questionsData = req.body as QuestionsType;

        const validatedQuestions = questionsSchema.safeParse(questionsData);

        if (!validatedQuestions.success) {
            return res.status(400).json({
                message: "Incorrect inputs",
                errors: validatedQuestions.error.flatten(),
            });
        }

        // Iterate over each question and store in the database
        for (const question of validatedQuestions.data) {
            await prisma.question.create({
                data: {
                    sectionId: sectionId,
                    question: question.question,
                    options: { set: question.options },
                    answers: question.answer,
                },
            });
        }

        res.status(201).json({
            message: "Questions and answers stored successfully",
        });
    } catch (error) {
        console.error("Error storing section details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
