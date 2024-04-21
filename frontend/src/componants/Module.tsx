import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface Section {
    id: number;
    title: string;
    videoKey: string;
}

interface Module {
    id: number;
    sections: Section[];
}

interface ModulesProps {
    modules: Module[];
    courseId: string;
}

const Modules: FC<ModulesProps> = ({ modules, courseId }: ModulesProps) => {
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

    return (
        <div className="bg-ctp-base text-ctp-text min-h-screen p-6">
            <h2 className="text-3xl font-bold mb-6">Course Modules</h2>
            <div className="bg-ctp-surface1 rounded-lg p-6">
                {modules &&
                    modules.map(module => (
                        <div key={module.id} className="mb-6">
                            <div
                                className="flex justify-between items-center bg-ctp-surface2 p-4 rounded-lg cursor-pointer"
                                onClick={() => toggleModule(module.id)}
                            >
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
                                    {module.sections.map(subsection => (
                                        <div
                                            key={subsection.id}
                                            className="mb-4"
                                        >
                                            <div
                                                className="flex justify-between items-center bg-ctp-surface0 p-4 rounded-lg cursor-pointer"
                                                onClick={() =>
                                                    toggleSubsection(
                                                        subsection.id,
                                                    )
                                                }
                                            >
                                                <h4 className="text-base font-semibold">
                                                    {subsection.title}
                                                </h4>
                                                <svg
                                                    className={`w-6 h-6 transition-transform ${openSubsectionId === subsection.id ? "rotate-180" : ""}`}
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
                                            {openSubsectionId ===
                                                subsection.id && (
                                                <div className="mt-4">
                                                    <video
                                                        src={
                                                            "https://divya.b-cdn.net/1_HTML.mp4"
                                                        }
                                                        controls
                                                        className="w-full rounded-lg"
                                                    />

                                                    <Link
                                                        to={`/quize/${courseId}/${module.id}/${subsection.id}`}
                                                    >
                                                        <button className="bg-ctp-blue text-white font-bold py-2 px-4 rounded mt-2 mb-4">
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

export default Modules;
