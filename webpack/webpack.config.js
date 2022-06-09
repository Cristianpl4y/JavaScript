const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    // mode: 'production',
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'

    },
    devServer: {
        contentBase: "./public",
        port: 9000,
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]

    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css',

        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, // Este plugin extrai CSS em arquivos separados. Ele cria um arquivo CSS por arquivo JS que contém CSS.
                // 'style-loader', // Adiciona CSS na DOM injetando a tag <style>
                'css-loader', // responsavel por interpreta @import, url()... 
                'sass-loader', 
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ]
        }]
    }

}