const path = require("path")
module.exports = {
    mode: "production",
    entry: "./src/blogdetailpage.js",
    output: {
        filename: "blogdetailpage.js",
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