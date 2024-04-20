import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between p-4 bg-ctp-surface0 text-ctp-text">
                <div className="flex-grow">
                    <form className="pl-64 flex justify-self-end w-3/6">
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
                <Link to={"/login"}>
                <button className="px-4 py-2 bg-ctp-blue text-ctp-text font-bold rounded hover:bg-ctp-sapphire">
                    Login
                </button>
                </Link>
            </nav>
        </div>
    );
};

export default NavBar;
