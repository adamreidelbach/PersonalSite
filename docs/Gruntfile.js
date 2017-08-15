module.exports = function(grunt) {

  grunt.initConfig({
    // Change the b-fy task to add a transform task
    jshint: {
      options: {
        predef: [ "document", "console", "alert", "$", "$scope", ],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "app": true},
      },
      files: ['../app/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/main.sass'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.sass'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};
