const path = require("path")
module.exports = {
    mode: "production",
    entry: "./src/homepage.js",
    output: {
        filename: "homepage.js",
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