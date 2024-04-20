import React, { useEffect, useState } from "react";

interface CourseData {
    title: string;
    image: string;
    courseName: string;
    instructor: string;
}

const Course: React.FC = () => {
    const [course, setCourse] = useState<CourseData>();

    useEffect(() => {
        const c: CourseData = {
            title: "hih",
            image: "./../assets/wallhaven-d66zvmrsz.png",
            courseName: `lalalal`,
            instructor: "baba",
        };

        setCourse(c);
    });

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
                        Big Title Goes Here
                    </h1>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="flex flex-col items-center text-center justify-center">
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base">
                                    Raclette knausgaard hella meggs normcore
                                    williamsburg enamel pin sartorial venmo tbh
                                    hot chicken gentrify portland.
                                </p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">
                                Meggings portland fingerstache lyft, post-ironic
                                fixie man bun banh mi umami everyday carry
                                hexagon locavore direct trade art party.
                                Locavore small batch listicle gastropub
                                farm-to-table lumbersexual salvia messenger bag.
                                Coloring book flannel truffaut craft beer
                                drinking vinegar sartorial, disrupt fashion axe
                                normcore meh butcher. Portland 90's scenester
                                vexillologist forage post-ironic asymmetrical,
                                chartreuse disrupt butcher paleo intelligentsia
                                pabst before they sold out four loko. 3 wolf
                                moon brooklyn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Course;
