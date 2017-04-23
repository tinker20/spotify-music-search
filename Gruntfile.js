module.exports = function (grunt) {
    //load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    grunt.file.expand('../node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            task: {
                src: [
                    'index.html'   // .html support...
                ],
                options: {
                    ignorePath: 'js'
                }
            }
        },
        jshint: {
            files: [
                'Gruntfile.js',
                'js/app.js',
                'js/modules/**/*.js'
            ],
            options: {
                jshintrc: true
            }
        },
        watch: {
            options: {
                livereload: true
            },
            jshint: {
                files: [
                    'Gruntfile.js',
                    'js/app.js',
                    'js/modules/**/*.js'
                ],
                tasks: ['jshint'],
                options: {
                    reload: true
                }
            },
            compass: {
                files: [
                    'scss/*.scss'
                ],
                tasks: ['compass']
            }
        },
        compass: {
            seller: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'assets/stylesheets'
                }
            }
        }
    });

    grunt.registerTask('default', [
        'jshint',
        'wiredep',
        'compass',
        'watch'
    ]);
};