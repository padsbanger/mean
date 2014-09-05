'use strict';

var path = require('path');

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    express: {
      myServer: {
        options: {
          hostname: 'localhost',
          port: '3000',
          server: path.resolve(__dirname, 'server'),
          bases: path.resolve(__dirname, 'public/'),
          livereload: true,
          serverreload: false
        }
      }
    },
    bower: {
      install: {
        targetDir: 'public/libs/',
        cleanBowerDir: true,
        cleanup: true
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      libs: {
        src: [
          'public/libs//angular/angular.min.js',
          'public/libs//angular-route/angular-route.min.js',
          'public/libs//angular-animate/angular-animate.min.js',

        ],
        dest: 'public/js/build/libs.js'
      },
      directives: {
        src: ['public/js/src/directives/**/*.js'],
        dest: 'public/js/build/directives.js'
      },
      controllers: {
        src: ['public/js/src/controllers/**/*.js'],
        dest: 'public/js/build/controllers.js'
      },
      services: {
        src: ['public/js/src/services/**/*.js'],
        dest: 'public/js/build/services.js'
      },
      filters: {
        src: ['public/js/src/filters/**/*.js'],
        dest: 'public/js/build/filters.js'
      }
    },

    less: {
      development: {
        options: {
          compress: true,
          paths: ['public/styles/less/*/']
        },
        files: {
          'public/styles/css/style.css': 'public/styles/less/style.less'
        }
      }
    },

    watch: {
      styles: {
        files: ['public/styles/less/*.less'],
        tasks: ['less'],
        options: {
          livereload: {
            port: 9001
          }
        },
      },
      directives: {
        files: ['public/js/src/directives/**/*.js'],
        tasks: ['concat:directives'],
        options: {
          livereload: {
            port: 9001
          }
        },
      },
      services: {
        files: ['public/js/src/services/*.js'],
        tasks: ['concat:services'],
        options: {
          livereload: {
            port: 9001
          }
        },
      },
      filters: {
        files: ['public/js/src/filters/**/*.js'],
        tasks: ['concat:filters'],
        options: {
          livereload: {
            port: 9001
          }
        },
      },
      controllers: {
        files: ['public/js/src/controllers/**/*.js'],
        tasks: ['concat:controllers'],
        options: {
          livereload: {
            port: 9001
          }
        },
      },
      app: {
        files: ['public/js/src/*.js'],
        options: {
          livereload: {
            port: 9001
          }
        },
      },
      html: {
        files: ['public/*.html','public/views/*.html', 'public/views/**/*.html'],
        options: {
          livereload: {
            port: 9001
          }
        },
      },
    }
  });

  grunt.registerTask('default', function() {
    grunt.task.run([
      'bower',
      'concat',
      'less',
      'express:myServer',
      'watch'
    ]);
  });

  grunt.registerTask('build', function() {
    grunt.task.run([
      'bower',
      'concat',
      'less',
    ]);
  });

};