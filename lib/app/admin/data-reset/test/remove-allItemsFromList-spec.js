var sinon = require('sinon');
var Promise = require('bluebird');
require('sinon-as-promised');

var remove = require('./../remove');
var sampleData = require('./../data-demo/index');
var CLOUD_TOPIC_PREFIX  = require('../topics_constants').CLOUD_TOPIC_PREFIX;


describe('Test remove', function() {
  var mediatorRequestStub = sinon.stub();
  var mediatorMock = {request: mediatorRequestStub};

  beforeEach(function() {
    mediatorMock.request.reset();

  });

  function getTestFunc(itemType) {
    return function(item) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + itemType + ':delete',
        item.id,
        {uid: item.id}
      ).resolves(item.id);
    };
  }

  it('Should remove all from files list', function() {
    var type = 'file';

    return Promise.mapSeries(sampleData.files(), getTestFunc(type))
      .then(remove.removeAllItemsFromList(mediatorMock, sampleData.files(), type));
  });


  it('Should remove all from groups list', function() {
    var type = 'group';

    return Promise.mapSeries(sampleData.groups(), getTestFunc(type))
      .then(remove.removeAllItemsFromList(mediatorMock, sampleData.groups(), type));
  });


  it('Should remove all from memberships list', function() {
    var type = 'memberships';

    return Promise.mapSeries(sampleData.memberships(), getTestFunc(type))
      .then(remove.removeAllItemsFromList(mediatorMock, sampleData.memberships(), type));
  });


  it('Should remove all from message list', function() {
    var type = 'messages';

    return Promise.mapSeries(sampleData.messages(), getTestFunc(type))
      .then(remove.removeAllItemsFromList(mediatorMock, sampleData.messages(), type));
  });


  it('Should remove all from results list', function() {
    var type = 'results';

    return Promise.mapSeries(sampleData.results(), getTestFunc(type))
      .then(remove.removeAllItemsFromList(mediatorMock, sampleData.results(), type));
  });


  it('Should remove all from workflows list', function() {
    var type = 'workflows';

    return Promise.mapSeries(sampleData.workflows(), getTestFunc(type))
      .then(remove.removeAllItemsFromList(mediatorMock, sampleData.workflows(), type));

  });


  it('Should remove all from workorders list', function() {
    var type = 'workorders';

    return Promise.mapSeries(sampleData.workorders(), getTestFunc(type))
      .then(remove.removeAllItemsFromList(mediatorMock, sampleData.workorders(), type));
  });

});