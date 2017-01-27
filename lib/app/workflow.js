'use strict';

var ArrayStore = require('fh-wfm-mediator/lib/array-store');
var workflows = require('./admin/data-reset/data-demo/workflows');


module.exports = function(mediator) {
  var arrayStore = new ArrayStore('workflows', workflows());
  arrayStore.listen('cloud:', mediator);
};
