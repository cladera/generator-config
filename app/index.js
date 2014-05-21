'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var ConfigGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to Config generator!'));
    this.log('Remember to install underscore: npm install underscore --save');
    done();
  },

  app: function () {
    this.mkdir('config');
    this.mkdir('config/env');

    this.copy('_index.js', 'config/index.js');
    this.copy('_all.js', 'config/all.js');
    this.copy('_development.js', 'config/env/development.js');
    this.copy('_test.js', 'config/env/test.js');
    this.copy('_production.js', 'config/env/production.js');
  }
});

module.exports = ConfigGenerator;
