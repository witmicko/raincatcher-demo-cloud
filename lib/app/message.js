'use strict';

var ArrayStore = require('fh-wfm-mediator/lib/array-store');
var messages = require('./admin/data-reset/data-demo/messages');


module.exports = function(mediator) {
  var arrayStore = new ArrayStore('messages', messages());
  arrayStore.listen('cloud:', mediator);
};
