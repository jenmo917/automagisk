module.exports = {
    context: __dirname,
    entry: "./src/index.html",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",

    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            query: {
                presets: [
                    "es2015",
                    "react"
                ]
            }
        }]
    },

};

"babel-loader": "6.2.5",
"babel-preset-es2015": "6.14.0",
"babel-preset-react": "6.11.1",
"express": "4.14.0",
"file-loader": "0.9.0",
