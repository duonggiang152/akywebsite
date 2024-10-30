const path = require("path")
module.exports = {
    mode: "production",
    entry: "./src/blogpage.js",
    output: {
        filename: "blogpage.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}