// next.config.js
module.exports = {
    experimental: {
        swcPlugins: [["next-superjson-plugin", {}]],
    },
    images: {
        domains: [
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com"
        ]
    }
};
