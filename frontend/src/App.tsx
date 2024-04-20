import "./App.css";
import { FC } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NavBar from "./componants/NavBar";

import Upload from "./componants/Upload";

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
