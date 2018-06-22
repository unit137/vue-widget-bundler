const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'development',
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'vue-widget.js',
		publicPath: 'dist'
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [path.resolve('src')],
				options: {
					formatter: require('eslint-friendly-formatter'),
					emitWarning: true
				}
			},
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 300000,
					name: '[name].[ext]?[hash]'
				}
			},
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
          'css-loader',
				]
			}
		]
	},
  plugins: [
    new VueLoaderPlugin(),
  ],
};

if (process.env.NODE_ENV === 'production') {
	// module.exports.devtool = '#source-map';
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: {
					warnings: false
				}
			},
			// sourceMap: true
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
