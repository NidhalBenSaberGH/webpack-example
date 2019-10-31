const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new CopyPlugin([
            { from: 'views/announcements.html' },
            { from: 'views/createAnnouncement.html' },
            { from: 'views/signin.html' },
            { from: 'views/signup.html'},
            { from: 'src/img/vintudlogo36x39.png'}
        ])
    ],
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.css$/,
                use:  [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};
