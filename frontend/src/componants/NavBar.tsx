import { useState, FC } from "react";
import SideBar from "./SideBar";

const NavBar: FC = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div>
            <nav className="flex items-center justify-between p-4 bg-ctp-surface0 text-ctp-text">
                <button
                    className="text-2xl font-bold focus:outline-none"
                    onClick={toggleSidebar}
                >
                    &#9776;
                </button>
                <div className="flex-grow">
                    <form className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-3 py-2 bg-ctp-surface1 text-ctp-text border border-ctp-surface2 rounded-l outline-none focus:border-ctp-lavender"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-ctp-blue text-ctp-text font-bold rounded-r hover:bg-ctp-sapphire"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <button className="px-4 py-2 bg-ctp-blue text-ctp-text font-bold rounded hover:bg-ctp-sapphire">
                    Login
                </button>
            </nav>

            <SideBar show={showSidebar} onClose={toggleSidebar} />
        </div>
    );
};

export default NavBar;
