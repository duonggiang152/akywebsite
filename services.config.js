const path = require("path")
module.exports = {
    mode: "production",
    entry: "./src/servicespage.js",
    output: {
        filename: "services.js",
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