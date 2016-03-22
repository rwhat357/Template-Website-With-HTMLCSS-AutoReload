module.exports = function(grunt) {

	grunt.initConfig({
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3001,
					open: true,
					livereload: true
				}
			}
		},
		watch: {
			// reload the browser when changes are made
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'index.html',
					'css/*'
				]
			},



		},
	
 	});

	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('dev',[
		'connect',
		'watch'
	]);


};