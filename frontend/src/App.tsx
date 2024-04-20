import "./App.css";
import { FC } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NavBar from "./componants/NavBar";

import Upload from "./componants/Upload";

const Layout: FC = () => {
    return (
        <div className="app h-screen">
            <NavBar />
            <div className="flex flex-row h-3/4">
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
                path: "/",
                element: <div>hi</div>,
            },
            // TODO: this shit
            // {
            //     path: "/contact",
            //     element: <Contact />,
            // },
        ],
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
