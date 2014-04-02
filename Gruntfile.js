// Generated on 2014-03-28 using generator-webapp 0.4.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },

        rsync: {
          options: {
            args: ["--verbose"],
            exclude: [".git*", "node_modules", "robots.txt", ".htaccess", ".bowerrc", "bower.json", "package.json", "sshsettings.json", "Gruntfile.js", ".DS_Store", "bower_components/**"],
            recursive: true
          },
          prod: {
            options: {
              src: "./build/",
              dest: "/home/dhenein/public_html/labs/loop-docs/",
              host: "people",
              syncDestIgnoreExcl: true
            }
          }
        }

    });


    grunt.registerTask('deploy', ['rsync:prod']);

};
