import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Module {
    id: number;
    title: string;
    subsections: Subsection[];
}

interface Subsection {
    id: number;
    title: string;
    video: string;
}

const initialModules: Module[] = [
    {
        id: 1,
        title: "Introduction to Programming",
        subsections: [
            {
                id: 1,
                title: "What is Programming?",
                video: "https://example.com/video1.mp4",
            },
            {
                id: 2,
                title: "Variables and Data Types",
                video: "https://example.com/video2.mp4",
            },
            // Add more subsections
        ],
    },
    {
        id: 2,
        title: "Control Structures",
        subsections: [
            {
                id: 3,
                title: "Conditional Statements",
                video: "https://example.com/video3.mp4",
            },
            {
                id: 4,
                title: "Loops",
                video: "https://www.youtube.com/watch?v=Way9Dexny3w",
            },
            // Add more subsections
        ],
    },
    // Add more modules
];

const Module: React.FC = () => {
    const [modules, setModules] = useState<Module[]>(initialModules);
    const [openModuleId, setOpenModuleId] = useState<number | null>(null);
    const [openSubsectionId, setOpenSubsectionId] = useState<number | null>(
        null,
    );

    const toggleModule = (moduleId: number) => {
        setOpenModuleId(prevOpenModuleId =>
            prevOpenModuleId === moduleId ? null : moduleId,
        );
    };

    const toggleSubsection = (subsectionId: number) => {
        setOpenSubsectionId(prevOpenSubsectionId =>
            prevOpenSubsectionId === subsectionId ? null : subsectionId,
        );
    };

    const videoUrl =
        "./../assets/tow_towers/The.Lord.Of.The.Rings.The.Two.Towers.2002.EXTENDED.2160p.4K.BluRay.x265.10bit.AAC5.1-[YTS.MX].mkv";
    return (
        <div className="bg-ctp-base text-ctp-text min-h-screen p-6">
            <h2 className="text-3xl font-bold mb-6">Course Modules</h2>
            <div className="bg-ctp-surface1 rounded-lg p-6">
                {modules.map(module => (
                    <div key={module.id} className="mb-6">
                        <div
                            className="flex justify-between items-center bg-ctp-surface2 p-4 rounded-lg cursor-pointer"
                            onClick={() => toggleModule(module.id)}
                        >
                            <h3 className="text-lg font-semibold">
                                {module.title}
                            </h3>
                            <svg
                                className={`w-6 h-6 transition-transform ${openModuleId === module.id ? "rotate-180" : ""}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                        {openModuleId === module.id && (
                            <div className="mt-4">
                                {module.subsections.map(subsection => (
                                    <div key={subsection.id} className="mb-4">
                                        <div
                                            className="flex justify-between items-center bg-ctp-surface0 p-4 rounded-lg cursor-pointer"
                                            onClick={() =>
                                                toggleSubsection(subsection.id)
                                            }
                                        >
                                            <h4 className="text-base font-semibold">
                                                {subsection.title}
                                            </h4>
                                            <svg
                                                className={`w-6 h-6 transition-transform ${
                                                    openSubsectionId ===
                                                    subsection.id
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {openSubsectionId === subsection.id && (
                                            <div className="mt-4">
                                                <video
                                                    controls
                                                    className="w-full rounded-lg"
                                                >
                                                    <source src="../../../../../Videos/movies/Legend (2015) [1080p] [YTS.AG]/Legend.2015.1080p.BluRay.x264-[YTS.AG].mp4" />
                                                </video>

                                                <Link to="/quize">
                                                    <button className="bg-ctp-blue text-white font-bold py-2 px-4 rounded mb-4">
                                                        take quize
                                                    </button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Module;
