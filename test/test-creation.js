/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('config generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('config:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'config/index.js',
      'config/all.js',
      'config/env/development.js',
      'config/env/test.js',
      'config/env/production.js'
    ];
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
