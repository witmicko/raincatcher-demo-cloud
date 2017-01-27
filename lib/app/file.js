'use strict';

var ArrayStore = require('fh-wfm-mediator/lib/array-store');
var files = require('./admin/data-reset/data-demo/files');



module.exports = function(mediator) {
  var arrayStore = new ArrayStore('files', files());
  arrayStore.listen('cloud:', mediator);
};
