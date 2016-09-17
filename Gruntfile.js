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
		watch: {
			cjsx: {
				files: 'public/jsx/*.jsx',
				tasks: ['cjsx:transform'],
				options: {
					debounceDelay: 250
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-coffee-react');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['cjsx', 'watch']);
}