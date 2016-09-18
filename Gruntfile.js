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
			// 		debounceDelay: 250
			// 	}
			// }
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
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less', 'cssmin', 'watch']);
}