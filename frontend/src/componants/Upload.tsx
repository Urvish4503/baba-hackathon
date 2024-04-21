import axios from "axios";
import { useState, FC } from "react";

interface Section {
    id: number;
    subSections: SubSection[];
}

interface SubSection {
    id: number;
    title: string;
    videoKey: string;
}

const Upload: FC = () => {
    const [sections, setSections] = useState<Section[]>([]);
    const [activeSection, setActiveSection] = useState<number | null>(null);
    const [courseTitle, setCourseTitle] = useState<string>("");
    const [courseThumbnail, setCourseThumbnail] = useState<File | null>(null);
    const [courseDescription, setCourseDescription] = useState<string>("");
    const [courseLevel, setCourseLevel] = useState<string>("");
    const [courseCategory, setCourseCategory] = useState<string>("");
    const [courseOutcomes, setOutcomes] = useState<string>("");

    const baba = () => {
        const output = {
            title: courseTitle,
            category: courseCategory,
            decription: courseDescription,
            outcome: courseOutcomes,
            module: sections,
        };
        console.log(JSON.stringify(output));
    };

    const addSection = () => {
        const newSection: Section = {
            id: sections.length + 1,
            subSections: [],
        };
        setSections([...sections, newSection]);
        setActiveSection(newSection.id);
    };

    const addSubSection = (sectionId: number) => {
        const updatedSections = sections.map(section => {
            if (section.id === sectionId) {
                const newSubSection: SubSection = {
                    id: section.subSections.length + 1,
                    title: "",
                    videoKey: "",
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

    const handleVideoUpload = async (file: File) => {
        console.log(`yoho`);
        if (!file) {
            // Display error message or handle case where no file is selected
            console.error("No file selected.");
            return;
        }
        console.log(`here`);
        const key = `${Date.now()}`;
        const formData = new FormData();
        formData.append("video", file);

        const data = {
            Type: "video/mp4",
            key: key,
            file: formData,
        };
        console.log(`here`);

        const url = await axios.post(
            "http://localhost:8800/api/upload/video",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );

        console.log(url.data.url);

        console.log(`here`);

        console.log(`here`);

        // try {
        //     const response = await axios.put(`${url.data.url}`, formData, {
        //         headers: {
        //             "Content-Type": "application/octet-stream",
        //             "Access-Control-Allow-Credentials": "true",
        //             "Access-Control-Allow-Origin": "*",
        //             "Access-Control-Allow-Methods":
        //                 "GET, POST, PATCH, DELETE, PUT, OPTIONS",
        //             "Access-Control-Allow-Headers":
        //                 "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        //         },
        //     });
        //     console.log("Upload successful!", response);
        // } catch (error) {
        //     console.error("Error uploading file:", error);
        // }
        // console.log(`here`);
    };

    return (
        <div className="w-full pt-4 pb-44 bg-ctp-base">
            <div className="container mx-auto px-4 py-8 max-w-[60rem]">
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Enter course title"
                        className="w-full mb-4 px-3 py-2 bg-ctp-surface0 text-ctp-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                        value={courseTitle}
                        onChange={e => setCourseTitle(e.target.value)}
                    />
                    <div className="mb-4">
                        <label
                            htmlFor="course-thumbnail"
                            className="bg-ctp-blue text-white font-bold py-2 px-4 rounded cursor-pointer"
                        >
                            Select Thumbnail
                        </label>
                        <input
                            type="file"
                            id="course-thumbnail"
                            className="invisible"
                            accept="image/*"
                            onChange={e => {
                                if (
                                    e.target.files &&
                                    e.target.files.length > 0
                                ) {
                                    setCourseThumbnail(e.target.files[0]);
                                }
                            }}
                        />
                        {courseThumbnail && (
                            <div className="mt-2">
                                <img
                                    src={URL.createObjectURL(courseThumbnail)}
                                    alt="Course Thumbnail"
                                    className="max-w-full h-auto"
                                />
                            </div>
                        )}
                    </div>
                    <textarea
                        placeholder="Enter course description"
                        className="w-full mb-4 px-3 py-2 bg-ctp-surface0 text-ctp-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                        value={courseDescription}
                        onChange={e => setCourseDescription(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter course outcome"
                        className="w-full mb-4 px-3 py-2 bg-ctp-surface0 text-ctp-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                        value={courseOutcomes}
                        onChange={e => setOutcomes(e.target.value)}
                    />
                    <div className="mb-4">
                        <label
                            htmlFor="course-level"
                            className="text-ctp-text font-bold mb-2"
                        >
                            Course Level:
                        </label>
                        <select
                            id="course-level"
                            className="w-full px-3 py-2 bg-ctp-surface0 text-ctp-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                            value={courseLevel}
                            onChange={e => setCourseLevel(e.target.value)}
                        >
                            <option value="">Select course level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="course-category"
                            className="text-ctp-text font-bold mb-2"
                        >
                            Course Category:
                        </label>
                        <select
                            id="course-category"
                            className="w-full px-3 py-2 bg-ctp-surface0 text-ctp-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                            value={courseCategory}
                            onChange={e => setCourseCategory(e.target.value)}
                        >
                            <option value="">Select course category</option>
                            <option value="web">Web Development</option>
                            <option value="data-science">Data Science</option>
                            <option value="android">Android Development</option>
                        </select>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <button
                            className="bg-ctp-blue text-white font-bold py-2 px-4 rounded mb-4"
                            onClick={addSection}
                        >
                            Add Section
                        </button>
                    </div>
                    <div>
                        {sections.map(section => (
                            <div key={section.id} className="mb-4">
                                <div
                                    className={`bg-ctp-surface0 p-4 rounded cursor-pointer flex justify-between items-center ${
                                        activeSection === section.id
                                            ? "bg-ctp-surface1"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleSectionToggle(section.id)
                                    }
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
                                            onChange={e => {
                                                const updatedSections =
                                                    sections.map(s => {
                                                        if (
                                                            s.id === section.id
                                                        ) {
                                                            return {
                                                                ...s,
                                                                title: e.target
                                                                    .value,
                                                            };
                                                        }
                                                        return s;
                                                    });
                                                setSections(updatedSections);
                                            }}
                                        />
                                        <button
                                            className="bg-ctp-blue text-white font-bold py-2 px-4 rounded mb-4"
                                            onClick={() =>
                                                addSubSection(section.id)
                                            }
                                        >
                                            Add Sub-Section
                                        </button>
                                        {section.subSections.map(subSection => (
                                            <div
                                                key={subSection.id}
                                                className="mb-4"
                                            >
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
                                                                    s.id ===
                                                                    section.id
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
                                                        setSections(
                                                            updatedSections,
                                                        );
                                                    }}
                                                />
                                                <div className="flex mt-2">
                                                    <div className="mb-4">
                                                        <label
                                                            htmlFor={`video-upload-${section.id}-${subSection.id}`}
                                                            className="bg-ctp-blue text-white font-bold py-2 px-4 rounded cursor-pointer"
                                                        >
                                                            Select Video
                                                        </label>
                                                        <input
                                                            type="file"
                                                            id={`video-upload-${section.id}-${subSection.id}`}
                                                            className="invisible"
                                                            accept="video/mp4"
                                                            onChange={e => {
                                                                if (
                                                                    e.target
                                                                        .files &&
                                                                    e.target
                                                                        .files
                                                                        .length >
                                                                        0
                                                                ) {
                                                                    handleVideoUpload(
                                                                        e.target
                                                                            .files[0],
                                                                    );
                                                                }
                                                            }}
                                                        />
                                                        {subSection.videoKey && (
                                                            <div className="mt-2">
                                                                <video
                                                                    src={
                                                                        subSection.videoKey
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

                <button
                    className="bg-ctp-blue text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={baba}
                >
                    Upload
                </button>
            </div>
        </div>
    );
};

export default Upload;
