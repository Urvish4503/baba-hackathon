import React, { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

interface QuizParams extends Record<string, string | undefined> {
    courseId: string;
    moduleId: string;
    subsectionId: string;
}

const QuizForm: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [responses, setResponses] = useState<{ [key: number]: string }>({});

    const { courseId, moduleId, subsectionId } = useParams<QuizParams>();

    const courseIdNum = parseInt(courseId ?? "0", 10);
    const moduleIdNum = parseInt(moduleId ?? "0", 10);
    const subsectionIdNum = parseInt(subsectionId ?? "0", 10);

    console.log("Course ID:", courseIdNum);
    console.log("Module ID:", moduleIdNum);
    console.log("Subsection ID:", subsectionIdNum);

    useEffect(() => {
        // Fetch questions from the server when the component mounts
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8800/api/course/sections/${subsectionIdNum}/questions`,
                    {
                        params: {
                            courseIdNum,
                            moduleIdNum,
                        },
                    },
                );

                console.log(response.data);
                setQuestions(response.data);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchQuestions();
    }, []);

    const handleResponseChange = (questionId: number, response: string) => {
        setResponses({ ...responses, [questionId]: response });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Handle form submission (e.g., send responses to the server)
        console.log("User responses:", responses);
        // Add your Axios POST request here to submit responses to the server
    };

    return (
        <div className="bg-ctp-base text-ctp-text min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mt-4 mb-6">Quiz Form</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-xl ">
                <div className="bg-ctp-surface1 rounded-lg p-6">
                    {Array.isArray(questions) && questions.length > 0 ? (
                        questions.map(question => (
                            <div key={question.id} className="mb-8">
                                <p className="text-lg font-semibold mb-2">
                                    {question.id}. {question.question}
                                </p>
                                <ul className="pl-4">
                                    {question.options.map((option, index) => (
                                        <li key={index} className="mb-2">
                                            <input
                                                type="radio"
                                                id={`option-${question.id}-${index}`}
                                                name={`question-${question.id}`}
                                                value={option}
                                                onChange={e =>
                                                    handleResponseChange(
                                                        question.id,
                                                        e.target.value,
                                                    )
                                                }
                                                checked={
                                                    responses[question.id] ===
                                                    option
                                                }
                                                className="mr-2 focus:ring-ctp-blue"
                                            />
                                            <label
                                                htmlFor={`option-${question.id}-${index}`}
                                                className="text-ctp-subtext1"
                                            >
                                                {option}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p className="text-ctp-subtext0">
                            Loading questions...
                        </p>
                    )}
                </div>
                <div className="mt-6 flex justify-center"></div>
            </form>
            <button
                type="submit"
                className="bg-ctp-blue text-ctp-base px-4 py-2 rounded-md hover:bg-ctp-blue-dark transition-colors"
            >
                Submit
            </button>
        </div>
    );
};

export default QuizForm;
