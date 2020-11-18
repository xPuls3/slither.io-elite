const WebpackUserscript = require("webpack-userscript");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/startup.ts",
    output: {
        filename: "user.script.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new ESLintPlugin(),
        new WebpackUserscript({
            metajs: false,
            renameExt: false,
            headers: {
                "name": "Slither.io Elite",
                "namespace": "https://xpuls3.github.io/",
                "include": "/^https?:\/\/(?:.+\.)?slither\.io\/?(?:.+)?$/",
                "version": "0.1.0-alpha",
                "author": "Puls3",
                "description": "An automation app for Slither.io",
                "run-at": "document-end",
                "grant": "none",
                "noframes": "true"
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
