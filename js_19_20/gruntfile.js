/**
 * Created by Lily on 23.05.2016.
 */
//module.exports = function(grunt) {
//
//    // Project configuration.
//    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),
//
//        concat: {
//            options: {
//                separator: ''
//            },
//
//            dist: {
//               src: ['styles/style.scss','styles/variables.scss', 'styles/nesting.scss', 'styles/reset.scss'],
//                dest: 'styles/main.scss'
//            },
//
//        sass: {
//
//            dist: {
//                files: [{
//                    expand: true,
//                    cwd: 'styles',
//                    src: ['main.scss'],
//                    dest: 'css',
//                    ext: '.css'
//                }]
//            },
//            watch: {
//                sass: {
//                    // We watch and compile sass files as normal but don't live reload here
//                    files: ['styles/*.scss'],
//                    tasks: ['concat', 'sass']
//                }
//            }
//
//        }
//
//
//        }
//    });
//
//
//    // Load the plugin that provides the "uglify" task.
//    grunt.loadNpmTasks('grunt-contrib-concat');
//    grunt.loadNpmTasks('grunt-contrib-watch');
//    grunt.loadNpmTasks('grunt-contrib-sass');
//
//
//    // Default task(s).
//    grunt.registerTask('default', ['concat',  'sass']);
//
//};

//
//module.exports = function(grunt) {
//
//    grunt.initConfig({
//        concat: {
//            js_files: {
//                src: ['js/src/*.js'],
//                dest: 'js/dest/script.min.js',
//                options: {
//                    separator: ';'
//                }
//            }
//            //css_files: {
//            //   src: ['styles/*.scss'],
//            //   dest: 'styles/style.main.scss',
//            //   options: {
//            //     separator: ''
//            //   }
//            //}
//        },
//        //uglify: {
//        //    js_files: {
//        //        src: ['js/dest/script.min.js'],
//        //        dest: 'js/dest/script.min.js'
//        //    }
//        //},
//        sass: {
//            dist: {
//                files: [{
//                    expand: true,
//                    cwd: 'styles',
//                    src: ['main.scss'],
//                    dest: 'styles',
//                    ext: '.css'
//                }]
//            }
//        },
//        watch: {
//            sass: {
//                // We watch and compile sass files as normal but don't live reload here
//                files: ['styles/*.scss'],
//                tasks: ['concat', 'sass']
//            }
//        }
//    });
//
//    grunt.loadNpmTasks('grunt-contrib-concat');
//    //grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.loadNpmTasks('grunt-contrib-sass');
//    grunt.loadNpmTasks('grunt-contrib-watch');
//
//    grunt.registerTask('default', ['concat', /*'uglify',*/ 'sass']);
//    // grunt.registerTask('default', ['concat', /*'uglify',*/ 'sass']);
//
//};



module.exports = function(grunt) {

    grunt.initConfig({
        concat:
        {

            dist:
            {
                src: ['styles/variables.scss','styles/reset.scss','styles/style.scss','styles/nesting.scss'],
                dest: 'styles/main.scss'
            }
        },
        //uglify:
        //{
        //    dist:
        //    {
        //        src:['js/dist/script.min.js'],
        //        dest:'js/dist/script.min.js'
        //    }
        //},
        sass:
        {
            dist:
            {
                files:
                    [{
                        expand: true,
                        cwd: 'styles',
                        src: ['main.scss'],
                        dest: 'styles',
                        ext: '.css'
                    }]
            }


        },
        watch:
        {
            sass:
            {

                files: ['styles/*.scss'],
                tasks: ['concat','sass']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat',/*'uglify',*/'sass']);


};
