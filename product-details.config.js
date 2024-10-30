const path = require("path")
module.exports = {
    mode: "production",
    entry: "./src/productDetails.js",
    output: {
        filename: "productDetails.js",
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