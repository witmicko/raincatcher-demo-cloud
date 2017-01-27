'use strict';

var ArrayStore = require('fh-wfm-mediator/lib/array-store');
var groups = require('./admin/data-reset/data-demo/groups');
var membership = require('./admin/data-reset/data-demo/membership');


module.exports = function(mediator) {
  var groupStore = new ArrayStore('groups', groups());
  groupStore.listen('cloud:', mediator);

  var membershipStore = new ArrayStore('memberships', membership());
  membershipStore.listen('cloud:', mediator);
};
