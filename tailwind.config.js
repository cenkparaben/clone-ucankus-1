// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                header: ["Ubuntu", "sans-serif"],
                content: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
