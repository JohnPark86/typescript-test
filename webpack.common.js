/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index'),
	output: {
		filename: 'index.bundle.js',
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'tstest',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js|.jsx$/,
				exclude: /node_modules/,
				resolve: {
					extensions: ['.js', '.jsx']
				},
				loader: 'babel-loader'
			},
			{
				test: /\.s[ac]ss|.css$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			}
		]
	}
};