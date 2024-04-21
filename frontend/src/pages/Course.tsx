import React, { useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";
import Modules from "./../componants/Module";

const SectionSchema = z.object({
    id: z.number(),
    title: z.string(),
    videoKey: z.string(),
});

const ModuleSchema = z.object({
    id: z.number(),
    sections: z.array(SectionSchema),
});

const CourseSchema = z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    outcomes: z.string(),
    level: z.string(),
    thumbnailKey: z.string(),
    Module: z.array(ModuleSchema),
});

type Course = z.infer<typeof CourseSchema>;

const CoursePage: React.FC<{ id: number }> = ({ id }) => {
    const [course, setCourse] = useState<Course | null>(null);

    const getCourse = async () => {
        try {
            const res = await axios.get(
                `http://localhost:8800/api/course/deatiledCourse/${id}`,
            );
            if (res.status === 200) {
                const parsedResponse = CourseSchema.safeParse(res.data);
                if (parsedResponse.success) {
                    setCourse(parsedResponse.data);
                } else {
                    console.error(parsedResponse.error);
                }
            } else {
                console.log(res);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCourse();
    }, [id]);

    return (
        <section className="text-gray-600 body-font bg-ctp-base">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg overflow-hidden">
                        <img
                            alt="content"
                            className="object-cover object-center w-full"
                            src="https://i.stack.imgur.com/YADuL.png"
                        />
                    </div>
                    <h1 className="text-3xl font-bold mt-6 text-center">
                        {course?.title}
                    </h1>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">
                                {course?.description}
                            </p>
                        </div>
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="flex flex-col items-center text-center justify-center">
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">{course?.outcomes}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{course && <Modules modules={course.Module} />}</div>
            </div>
        </section>
    );
};

export default CoursePage;
