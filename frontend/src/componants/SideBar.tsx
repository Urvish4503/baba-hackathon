import { FC } from "react";

const SideBar: FC<{ show: boolean; onClose: () => void }> = ({
    show,
    onClose,
}) => {
    return (
        <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-ctp-surface0 text-ctp-text transition-transform duration-300 ${
                show ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
                {/* Add sidebar content here */}
                <ul>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-4 rounded hover:bg-ctp-surface1"
                        >
                            Home
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
            <button
                className="absolute top-4 right-4 text-2xl font-bold focus:outline-none"
                onClick={onClose}
            >
                &times;
            </button>
        </div>
    );
};
export default SideBar;
