const path = require("path")
module.exports = {
    mode: "production",
    entry: "./src/introduceCompany.js",
    output: {
        filename: "introduceCompany.js",
        path: path.resolve(__dirname, "public/dist")
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