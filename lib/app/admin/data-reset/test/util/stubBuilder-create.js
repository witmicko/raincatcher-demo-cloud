
var sinon = require('sinon');
require('sinon-as-promised');
var _ = require('lodash');
var sampleData = require('./../../data-demo/index');
var shortid = require('shortid');

/**
 * Build stubs to list and remove items
 * :create - resolves to an ID of the removed item
 */
function buildMediatorCreateStubsForAll(mediatorRequestStub) {
  sampleData.files().forEach(function(item) {
    buildStub(mediatorRequestStub, item,  'files');
  });

  sampleData.groups().forEach(function(item) {
    buildStub(mediatorRequestStub, item,  'groups');
  });

  sampleData.memberships().forEach(function(item) {
    buildStub(mediatorRequestStub, item,  'memberships');
  });

  sampleData.messages().forEach(function(item) {
    buildStub(mediatorRequestStub, item,  'messages');
  });

  sampleData.results().forEach(function(item) {
    buildStub(mediatorRequestStub, item,  'results');
  });

  sampleData.workflows().forEach(function(item) {
    buildStub(mediatorRequestStub, item,  'workflows');
  });

  sampleData.workorders().forEach(function(item) {
    buildStub(mediatorRequestStub, item,  'workorders');
  });
}


function buildMediatorCreateStubsForType(mediatorRequestStub, typeList, type) {
  typeList.forEach(function(item) {
    buildStub(mediatorRequestStub, item,  type);
  });
}

function buildStub(mediatorRequestStub, item,  type) {
  var createdItem = _.cloneDeep(item);
  createdItem.id = shortid.generate();

  var topic = 'wfm:cloud:' + type +':create';
  mediatorRequestStub.withArgs(
    topic,
    [sinon.match.object, item.id],
    {uid: item.id}
  ).resolves(createdItem);
}

module.exports = {
  buildMediatorCreateStubsForAll: buildMediatorCreateStubsForAll,
  buildMediatorCreateStubsForType: buildMediatorCreateStubsForType
};