module.exports = {
  dist: {
    options: {
      report: 'min',
    },
    files: {
      'assets/dist/css/styles.min.css': ['assets/src/css/styles.css'],
    },
  },
};