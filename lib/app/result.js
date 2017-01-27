'use strict';

var ArrayStore = require('fh-wfm-mediator/lib/array-store');
var results = require('./admin/data-reset/data-demo/results');

module.exports = function(mediator) {
  var arrayStore = new ArrayStore('results', results());
  arrayStore.listen('cloud:', mediator);
};
