import { z } from "zod";

// quiz schema
const questionSchema = z.object({
    question: z.string(),
    options: z.array(z.string()),
    answer: z.string(),
});

const questionsSchema = z.array(questionSchema);

// secion detail
const sectionDetailSchema = z.object({
    courseId: z.number(),
    moduleId: z.number(),
    sectionId: z.number(),
});

// sections
const sectionSchema = z.object({
    title: z.string(),
    videoKey: z.string(),
    transcript: z.string().default("test"),
});

// module
const moduleSchema = z.object({
    sections: z.array(sectionSchema),
});

// course summary
const courseSummarySchema = z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    level: z.string(),
    thumbnailKey: z.string(),
});

// create course
const createCourseSchema = z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    outcomes: z.string(),
    level: z.string(),
    createdBy: z.number().optional(),
    thumbnailKey: z.string(),
    modules: z.array(moduleSchema),
});

// faculty schema
const createFacultySchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
});

// type of the main schema
type createCourseType = z.infer<typeof createCourseSchema>;
type sectionType = z.infer<typeof sectionSchema>;
type moduleType = z.infer<typeof moduleSchema>;
type courseSummaryType = z.infer<typeof courseSummarySchema>;
type createFacultyType = z.infer<typeof createFacultySchema>;
type SectionDetailType = z.infer<typeof sectionDetailSchema>;
type QuestionType = z.infer<typeof questionSchema>;
type QuestionsType = z.infer<typeof questionsSchema>;

export {
    createCourseSchema,
    createCourseType,
    sectionType,
    moduleType,
    courseSummaryType,
    createFacultyType,
    createFacultySchema,
    sectionDetailSchema,
    questionsSchema,
    QuestionType,
    QuestionsType,
};
