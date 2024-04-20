import { useState, FC } from "react";

interface Section {
    id: number;
    title: string;
    subSections: SubSection[];
}

interface SubSection {
    id: number;
    imageUrl: string;
    title: string;
    videoUrl: string;
}

const Upload: FC = () => {
    const [sections, setSections] = useState<Section[]>([]);
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const addSection = () => {
        const newSection: Section = {
            id: sections.length + 1,
            title: "",
            subSections: [],
        };
        setSections([...sections, newSection]);
    };

    const addSubSection = (sectionId: number) => {
        const updatedSections = sections.map(section => {
            if (section.id === sectionId) {
                const newSubSection: SubSection = {
                    id: section.subSections.length + 1,
                    title: "",
                    imageUrl: "",
                    videoUrl: "",
                };
                return {
                    ...section,
                    subSections: [...section.subSections, newSubSection],
                };
            }
            return section;
        });
        setSections(updatedSections);
    };

    const handleSectionToggle = (sectionId: number) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    const handleVideoUpload = (
        sectionId: number,
        subSectionId: number,
        file: File,
    ) => {
        // Handle video upload logic here
        console.log(
            `Uploading video for section ${sectionId}, sub-section ${subSectionId}: ${file.name}`,
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                className="bg-ctp-blue text-white font-bold py-2 px-4 rounded mb-4"
                onClick={addSection}
            >
                Add Section
            </button>
            <div>
                {sections.map(section => (
                    <div key={section.id} className="mb-4">
                        <div
                            className={`bg-ctp-surface0 p-4 rounded cursor-pointer flex justify-between items-center ${
                                activeSection === section.id
                                    ? "bg-ctp-surface1"
                                    : ""
                            }`}
                            onClick={() => handleSectionToggle(section.id)}
                        >
                            <h3 className="text-ctp-text font-bold">
                                Section {section.id}
                            </h3>
                            <span
                                className={`text-ctp-blue ${
                                    activeSection === section.id
                                        ? "rotate-180"
                                        : ""
                                }`}
                            >
                                &#9662;
                            </span>
                        </div>
                        {activeSection === section.id && (
                            <div className="bg-ctp-surface1 p-4 rounded">
                                <input
                                    type="text"
                                    placeholder="Enter section title"
                                    className="w-full mb-4 px-3 py-2 bg-ctp-surface0 text-ctp-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                                    value={section.title}
                                    onChange={e => {
                                        const updatedSections = sections.map(
                                            s => {
                                                if (s.id === section.id) {
                                                    return {
                                                        ...s,
                                                        title: e.target.value,
                                                    };
                                                }
                                                return s;
                                            },
                                        );
                                        setSections(updatedSections);
                                    }}
                                />
                                <button
                                    className="bg-ctp-blue text-white font-bold py-2 px-4 rounded mb-4"
                                    onClick={() => addSubSection(section.id)}
                                >
                                    Add Sub-Section
                                </button>
                                {section.subSections.map(subSection => (
                                    <div key={subSection.id} className="mb-4">
                                        <h4 className="text-ctp-text font-bold">
                                            Sub-Section {section.id}.
                                            {subSection.id}
                                        </h4>
                                        <input
                                            type="text"
                                            placeholder="Enter sub-section title"
                                            className="w-full mb-2 px-3 py-2 bg-ctp-surface0 text-ctp-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                                            value={subSection.title}
                                            onChange={e => {
                                                const updatedSections =
                                                    sections.map(s => {
                                                        if (
                                                            s.id === section.id
                                                        ) {
                                                            const updatedSubSections =
                                                                s.subSections.map(
                                                                    ss => {
                                                                        if (
                                                                            ss.id ===
                                                                            subSection.id
                                                                        ) {
                                                                            return {
                                                                                ...ss,
                                                                                title: e
                                                                                    .target
                                                                                    .value,
                                                                            };
                                                                        }
                                                                        return ss;
                                                                    },
                                                                );
                                                            return {
                                                                ...s,
                                                                subSections:
                                                                    updatedSubSections,
                                                            };
                                                        }
                                                        return s;
                                                    });
                                                setSections(updatedSections);
                                            }}
                                        />
                                        <div className="flex mt-2">
                                            <div className="mb-4">
                                                <label
                                                    htmlFor={`video-upload-${section.id}-${subSection.id}`}
                                                    className="bg-ctp-blue text-white font-bold py-2 px-4 rounded cursor-pointer"
                                                >
                                                    Upload Video
                                                </label>
                                                <input
                                                    type="file"
                                                    id={`video-upload-${section.id}-${subSection.id}`}
                                                    className="hidden"
                                                    accept="video/*"
                                                    onChange={e => {
                                                        if (
                                                            e.target.files &&
                                                            e.target.files
                                                                .length > 0
                                                        ) {
                                                            handleVideoUpload(
                                                                section.id,
                                                                subSection.id,
                                                                e.target
                                                                    .files[0],
                                                            );
                                                        }
                                                    }}
                                                />
                                                {subSection.videoUrl && (
                                                    <div className="mt-2">
                                                        <video
                                                            src={
                                                                subSection.videoUrl
                                                            }
                                                            controls
                                                            className="max-w-full h-auto"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
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

export default Upload;
