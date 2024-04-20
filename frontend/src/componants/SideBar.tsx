const SideBar = () => {
    return (
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-ctp-surface0 text-ctp-text">
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
                {/* Add sidebar content here */}
                <ul>
                    <li className="border-b">
                        <a
                            href="/home"
                            className="block py-2 px-4 rounded hover:bg-ctp-surface1"
                        >
                            Home
                        </a>
                    </li>
                    <li className="">
                        <a
                            href="/home"
                            className="block py-2 px-4 rounded hover:bg-ctp-surface1"
                        >
                            JAVA
                        </a>
                    </li> <li className="">
                        <a
                            href="/home"
                            className="block py-2 px-4 rounded hover:bg-ctp-surface1"
                        >
                            DSA
                        </a>
                    </li> <li className="">
                        <a
                            href="/home"
                            className="block py-2 px-4 rounded hover:bg-ctp-surface1"
                        >
                            Python
                        </a>
                    </li>
                    <li className="">
                        <a
                            href="/home"
                            className="block py-2 px-4 rounded hover:bg-ctp-surface1"
                        >
                            HTML
                        </a>
                    </li>
                    <li className="border-b">
                        <a
                            href="/home"
                            className="block py-2 px-4 rounded hover:bg-ctp-surface1"
                        >
                            C
                        </a>
                    </li>
                   <li className="border-b">
                        <a
                            href="/home"
                            className="block py-2 px-4 rounded hover:bg-ctp-surface1"
                        >
                            Add course
                        </a>
                    </li>
                    

                    <li>
                        <a
                            href="#"
                            className="block py-2 px-4 rounded hover:bg-ctp-surface1"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-4 rounded hover:bg-ctp-surface1"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
