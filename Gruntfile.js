var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = function(grunt){
	grunt.initConfig({
		cjsx: {
			transform: {
				files: [
					{
						expand: true,
						cwd: 'public/jsx',
						src: '*.jsx',
						dest: 'public/js',
						ext: '.js'
					}
				]
			}
		},
		webpack: {
			transform: {
				plugins: [commonsPlugin],
				entry: {
					app: './public/jsx/app.js',
					example: './public/jsx/example.js'
				},
				output: {
					path: 'public/js',
					filename: '[name].js'
				},
				module: {
					loaders: [
						{
							test: /\.js$/, loader: "babel-loader"
						},
						{
							test: /\.js$/, loader: 'babel-loader!jsx-loader?harmony'
						}
					]
				},
				resolve: {
					root: './public/js/',
					alias: {
						'app': 'app.js'
					}
				}
			}
		},
		less: {
			transform: {
				files: [
					{
						expand: true,
						cwd: 'public/less',
						src: '*.less',
						dest: 'public/css',
						ext: '.css'
					}
				]
			}
		},
		cssmin: {
			target: {
				files: [
					{
						expand: true,
						cwd: 'public/css',
						src: '*.css',
						dest: 'public/css',
						ext: '.min.css'
					}
				]
			}
		},
		watch: {
			// cjsx: {
			// 	files: 'public/jsx/*.jsx',
			// 	tasks: ['cjsx:transform'],
			// 	options: {
			// 		debounceDelay: 350
			// 	}
			// }
			webpack: {
				files: 'public/jsx/*.js',
				tasks: ['webpack:transform'],
				options: {
					debounceDelay: 250
				}
			},
			less: {
				files: 'public/less/*.less',
				tasks: ['less:transform'],
				options: {
					debounceDelay: 250
				}
			}
		}
	});
	// grunt.loadNpmTasks('grunt-coffee-react');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['webpack', 'less', 'cssmin', 'watch']);
}