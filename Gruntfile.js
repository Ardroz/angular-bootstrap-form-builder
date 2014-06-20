/* jslint node: true */
'use strict';

module.exports = function ( grunt ) {
  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: '\n',
      },
      dist: {
        src: [
          'build/angular-bootstrap-form-builder.min.js',
          'build/templates/templates.min.js'
        ],
        dest: 'build/angular-bootstrap-form-builder.min.js',
      },
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
         files: [
          {
            expand: true,
            cwd: 'src/templates/',
            src: ['**/*.jade'],
            dest: 'build/templates/',
            ext: '.html',
            extDot: 'first'
          },
        ],
      }
    },
    jshint  : {
      all     : [
        'Gruntfile.js',
        'angular-bootstrap-form-builder.js'
      ]
    },
    less: {
      production: {
        options: {
          cleancss: true
        },
        files: {
          "build/css/angular-bootstrap-form-builder.min.css": "src/less/angular-bootstrap-form-builder.less"
        }
      }
    },
    ngtemplates:    {
      app:          {
        cwd:        'build',
        src:        'templates/**.html',
        dest:       'build/templates/templates.js',
        options:    {
          bootstrap:  function ( module, script ) {
            return  "app.run( templates );\n\n" +
                    "templates.$inject = ['$templateCache'];\n" +
                    "function templates( $templateCache ) {\n" +
                    script +
                    '}';
          },
          htmlmin: {
            collapseBooleanAttributes:      true,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeComments:                 true,
            removeEmptyAttributes:          true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true
          }
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/angular-bootstrap-form-builder.min.js': ['src/angular-bootstrap-form-builder.js'],
          'build/templates/templates.min.js': ['build/templates/templates.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
  grunt.registerTask('default', [
      'jshint',
      'jade',
      'less',
      'ngtemplates',
      'uglify',
      'concat'
    ]
  );
};
