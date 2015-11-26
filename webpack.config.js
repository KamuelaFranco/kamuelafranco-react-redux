
module.exports = {
	context: __dirname + '/src',
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: [/\.js$/, /\.jsx$/],
			loader: 'babel-loader',
			exclude: /(node_modules|bower_components)/
		}, {
			test: /\.css$/,
			loader: 'style!css',
			exclude: /(node_modules|bower_components)/
		}, {
			test: /\.json$/,
			loader: 'json-loader',
			exclude: /(node_modules|bower_components)/
		}]
	},
	resolve: {
		extensions: ['', '.jsx', '.json', '.js']
	}
};