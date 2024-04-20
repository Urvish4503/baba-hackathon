import React, { useState } from "react";
import axios from "axios";

const VideoUploadForm = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            if (selectedFile.type === "video/mp4") {
                setFile(selectedFile);
            } else {
                // Display error message or handle unsupported file type
                console.error(
                    "Unsupported file type. Please select a video file (mp4).",
                );
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) {
            // Display error message or handle case where no file is selected
            console.error("No file selected.");
            return;
        }

        const formData = new FormData();
        formData.append("video", file);
        try {
            const response = await axios.put("/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Upload successful!", response);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };
};

export default VideoUploadForm;
