import { FC, useState } from "react";

import { Link } from "react-router-dom";

const Login: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Username:", email);
        console.log("Password:", password);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-logi-page-two text-ctp-text">
            <div className="w-96 p-8 bg-ctp-surface0 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block mb-1 text-ctp-subtext1"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 bg-ctp-surface1 text-text border border-ctp-surface2 rounded outline-none focus:border-ctp-lavender"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
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
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-ctp-blue text-base font-bold rounded hover:bg-ctp-sapphire"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="mt-2 text-overlay1">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-ctp-blue hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
