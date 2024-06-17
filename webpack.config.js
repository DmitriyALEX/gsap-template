const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/script.js')
    },
    devServer: {
        port: 3000,
        static: path.resolve(__dirname, './dist'),
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GSAP animations',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                // test: /\.(scss|css)$/, // --IF SCSS
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash][ext]'
                },
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[index].bundle.js',
        clean: true,
    }
}

