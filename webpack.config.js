const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build/')
    },
    plugins: [
      new HTMLPlugin({
        filename: 'index.html',
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'build.css'
    })],
    devServer: {
        contentBase: path.resolve(__dirname, 'build')
      },
    module: {
        rules: [
            {
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader, 'css-loader'
                ],
              }
        ]
    }
}