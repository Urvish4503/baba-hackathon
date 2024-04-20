/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "login-page":
                    "url('https://raw.githubusercontent.com/Urvish4503/dotfiles/main/wallpaper/deer-forest.jpg')",
                "logi-page-two":
                    "url('https://raw.githubusercontent.com/Urvish4503/dotfiles/main/wallpaper/forest-bridge.jpg')",
            },
        },
    },
    plugins: [
        //eslint-disable-next-line
        require("@catppuccin/tailwindcss")({
            prefix: "ctp",
            defaultFlavour: "mocha",
        }),
    ],
};
