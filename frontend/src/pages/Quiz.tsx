import React, { useState, useEffect, FormEvent } from "react";
// import axios from "axios";

interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

const QuizForm: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [responses, setResponses] = useState<{ [key: number]: string }>({});

    // TODO: Remove this after testing
    useEffect(() => {
        // Simulated quiz questions
        const dummyQuestions: Question[] = [
            {
                id: 1,
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                answer: "Paris",
            },
            {
                id: 2,
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Mars", "Venus", "Jupiter"],
                answer: "Mars",
            },
            {
                id: 3,
                question: "Who wrote 'To Kill a Mockingbird'?",
                options: [
                    "Harper Lee",
                    "Stephen King",
                    "J.K. Rowling",
                    "Ernest Hemingway",
                ],
                answer: "Harper Lee",
            },
            {
                id: 4,
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                answer: "Paris",
            },
            {
                id: 5,
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Mars", "Venus", "Jupiter"],
                answer: "Mars",
            },
            {
                id: 6,
                question: "Who wrote 'To Kill a Mockingbird'?",
                options: [
                    "Harper Lee",
                    "Stephen King",
                    "J.K. Rowling",
                    "Ernest Hemingway",
                ],
                answer: "Harper Lee",
            },
        ];

        // Set the dummy questions to the state
        setQuestions(dummyQuestions);
    }, []);

    // TODO: Add the url
    // useEffect(() => {
    //     // Fetch questions from the server when the component mounts
    //     const fetchQuestions = async () => {
    //         try {
    //             const response = await axios.get<Question[]>("/api/questions");
    //             setQuestions(response.data);
    //         } catch (error) {
    //             console.error("Error fetching questions:", error);
    //         }
    //     };
    //     fetchQuestions();
    // }, []);

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
            <h2 className="text-3xl font-bold mb-6">Quiz Form</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
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
                <div className="mt-6 flex justify-center">
                    <button
                        type="submit"
                        className="bg-ctp-blue text-ctp-base px-4 py-2 rounded-md hover:bg-ctp-blue-dark transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default QuizForm;
