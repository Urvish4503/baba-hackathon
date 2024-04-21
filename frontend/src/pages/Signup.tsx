import axios from "axios";
import { useState, FC } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sighup: FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    // const handleRegister = async(e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     // Handle registration logic here
    //     console.log("Username:", username);
    //     console.log("Email:", email);
    //     console.log("Password:", password);
    // };

    const handlesubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            username,
            password,
            email,
        };
        const response = await axios.post(
            "http://127.0.0.1:8800/api/auth/signup",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        localStorage.setItem("token", response.data.token);
        navigate("/home");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-logi-page-two text-ctp-text">
            <div className="w-96 p-8 bg-ctp-surface0 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                <form
                // onSubmit={handleRegister}
                >
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block mb-1 text-ctp-subtext1"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 bg-ctp-surface1 text-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                            placeholder="Enter a username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-1 text-ctp-subtext1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 bg-ctp-surface1 text-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block mb-1 text-ctp-subtext1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 bg-ctp-surface1 text-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                            placeholder="Enter a password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={handlesubmit}
                        type="submit"
                        className="w-full py-2 bg-ctp-blue text-base font-bold rounded hover:bg-ctp-sapphire"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-overlay1">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-ctp-blue hover:underline"
                        >
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sighup;
