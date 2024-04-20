import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Video {
    id: number;
    title: string;
    thumbnail: string;
    courseTitle: string;
}

const HomePage: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const video: Video[] = [
            {
                id: 1,
                title: "hih",
                thumbnail: "./../assets/wallhaven-d66zvmrsz.png",
                courseTitle: `lalalal`,
            },
            {
                id: 2,
                title: "hih",
                thumbnail: "./../assets/wallhaven-d66zvmrsz.png",
                courseTitle: `lalalal`,
            },
            {
                id: 3,
                title: "hih",
                thumbnail: "./../assets/wallhaven-d66zvmrsz.png",
                courseTitle: `lalalal`,
            },
            {
                id: 4,
                title: "hih",
                thumbnail: "./../assets/wallhaven-d66zvmrsz.png",
                courseTitle: `lalalal`,
            },
            {
                id: 5,
                title: "hih",
                thumbnail: "./../assets/wallhaven-d66zvmrsz.png",
                courseTitle: `lalalal`,
            },
            {
                id: 6,
                title: "hih",
                thumbnail: "./../assets/wallhaven-d66zvmrsz.png",
                courseTitle: `lalalal`,
            },
            {
                id: 7,
                title: "hih",
                thumbnail: "./../assets/wallhaven-d66zvmrsz.png",
                courseTitle: `lalalal`,
            },
        ];

        setVideos(video);
    }, []);

    // const fetchVideos = async () => {
    //     try {
    //         const response = await fetch("/api/videos");
    //         const data = await response.json();
    //         setVideos(data);
    //     } catch (error) {
    //         console.error("Error fetching videos:", error);
    //     }
    // };

    return (
        <div className="pl-36 mt-12 container mx-auto px-4 py-8">
            {/* <h1 className="text-2xl font-bold mb-4 text-ctp-text">Courses</h1> */}
            <div className="pl-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map(video => (
                    <Link
                        to={`/course/${video.id}`}
                        key={video.id}
                        className="px-5 w-[110%]"
                    >
                        <div
                            key={video.id}
                            className="bg-ctp-surface0 rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="relative">
                                <img
                                    src={"https://i.stack.imgur.com/YADuL.png"}
                                    alt={video.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    {/* <button className="bg-ctp-blue text-ctp-text font-bold py-2 px-4 rounded">
                                        Watch
                                    </button> */}
                                </div>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2 text-ctp-text">
                                    {video.title}
                                </h2>
                                <p className="text-ctp-subtext1">
                                    {video.courseTitle}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
