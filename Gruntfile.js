module.exports = function (grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
     admin: {
       options: {
         outputStyle: 'compressed'
       },
       files: {
         'css/symphony.admin.css': 'scss/admin.scss'
       }
     },
     debug: {
       options: {
         outputStyle: 'compressed'
       },
       files: {
         'css/symphony.debug.css': 'scss/debug.scss'
       }
     }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }

});

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['sass']);

}
