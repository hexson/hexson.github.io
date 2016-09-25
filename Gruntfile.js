module.exports = function(grunt){
	grunt.initConfig({
		less: {
			transform: {
				files: [
					{
						expand: true,
						cwd: 'less',
						src: '*.less',
						dest: 'css',
						ext: '.css'
					}
				]
			}
		},
		watch: {
			less: {
				files: 'less/*.less',
				tasks: ['less:transform'],
				options: {
					debounceDelay: 150
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less', 'watch']);
}