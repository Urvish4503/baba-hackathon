import "./App.css";
import { FC } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NavBar from "./componants/NavBar";
import SideBar from "./componants/SideBar";
import Upload from "./componants/Upload";
import QuizForm from "./pages/Quiz";
import HomePage from "./pages/Home";
import Course from "./pages/Course";
import FacultySignup from "./pages/FacultySignup";

const Layout: FC = () => {
    return (
        <div className="app h-screen flex">
            <SideBar />
            <div className="flex flex-col flex-grow">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "home",
                element: <HomePage />,
            },
        ],
    },
    {
        path: "/course/:id",
        element: <Course />,
    },
    {
        path: "/upload",
        element: <Upload />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/quize",
        element: <QuizForm />,
    },
    {
        path: "/addFaculty",
        element: <FacultySignup />,
    },
]);

const App: FC = () => {
    return (
        <>
            <div>
                <RouterProvider router={router} />
            </div>
        </>
    );
};

export default App;
