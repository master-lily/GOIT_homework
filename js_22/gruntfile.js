/**
 * Created by Lily on 11.06.2016.
 */


module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,         //Enable dynamic expansion
                    cwd: 'js/src',        //Src matches are reletive to this path
                    src: ['*.js'],
                    dest: 'js/dist',      //Destination path prefix
                    ext: '.js',           //Dest filepaths will have this extension
                    extDot: 'first'       //Extensions in filenames begin after the first
                }]
            }
        },
        watch: {
            babel: {
                files: 'js/src/*.js',
                tasks: ['babel']
            }
        }

    });




grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['babel']);

};

//module.exports = function(grunt) {
//    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
//
//    grunt.initConfig({
//        babel: {
//            options: {
//                sourceMap: true,
//                presets: ['es2015']
//            },
//            dist: {
//                files: {
//                    'dist/app.js': 'src/app.js'
//                }
//            }
//        }
//    });
//};
//grunt.registerTask('default', ['babel']);
