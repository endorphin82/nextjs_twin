module.exports = {
    purge: {
        enabled: false,
        content: ["./src/**/*.jsx", "./src/**/*.tsx"],
    },
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                electric: '#db00ff',
                ribbon: '#0047ff',
            },
        },
    },
    plugins: [],
};
