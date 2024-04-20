import React, { useState, useEffect, FormEvent } from "react";
import axios from "axios";

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
        <div>
            <h2>Quiz Form</h2>
            <form onSubmit={handleSubmit}>
                {Array.isArray(questions) && questions.length > 0 ? (
                    questions.map(question => (
                        <div key={question.id}>
                            <p>{question.question}</p>
                            <ul>
                                {question.options.map((option, index) => (
                                    <li key={index}>
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
                                        />
                                        <label
                                            htmlFor={`option-${question.id}-${index}`}
                                        >
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>Loading questions...</p>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default QuizForm;
