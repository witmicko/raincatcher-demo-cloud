'use strict';

var ArrayStore = require('fh-wfm-mediator/lib/array-store');
var workorders = require('./admin/data-reset/data-demo/workorders');

module.exports = function(mediator) {

  var arrayStore = new ArrayStore('workorders', workorders());
  arrayStore.listen('cloud:', mediator);
};
