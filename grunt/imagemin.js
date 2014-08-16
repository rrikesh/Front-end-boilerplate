module.exports = {
	options: {
		cache: false
	},
    dist: {
		files: [{
			expand: true,     
			cwd: '/assets/src/',  
			src: ["**/*.{png,jpg,gif}"],
			dest: '/assets/dist/'
		}]
	}
};