/**
 * Created by Lily on 22.05.2016.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            js_dist: {
                src: [ 'js/src/*.js'],
                dest:  'js/dist/script-main.js'

            },

                css_dist: {
                    src: ['css/src/*.css'],
                    dest: 'css/dist/style-main.css'
                }
        },
        uglify: {
            js_dist: {
                src: ['js/dist/script-main.js'],
                dest: 'js/dist/script-main.min.js'
            }

        }
    });


    // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify']);

};