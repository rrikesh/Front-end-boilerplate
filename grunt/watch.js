module.exports = {
	options: {
		livereload: true,
	},
	css: {
		files: [
		'assets/src/scss/**/*.scss'
		],
        tasks: ['sass', 'autoprefixer', 'concat:css', 'csso'],
        options: {
        	interrupt: true,
        	spawn: false,
        },
    },
    js: {
    	files: [
		'assets/src/js/app.js'
		],
        tasks: ['jshint', 'uglify'],
        options: {
        	interrupt: true,
        	spawn: false,
        },
    },
    site: {
        files: ['**/*.html', '**/*.php']
    }
};