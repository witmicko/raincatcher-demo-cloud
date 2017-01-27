var sinon = require('sinon');
require('sinon-as-promised');
var remove = require('../remove');
var sampleData = require('../data-demo/index');
var CLOUD_TOPIC_PREFIX  = require('../topics_constants').CLOUD_TOPIC_PREFIX;


describe('Test remove all data', function() {
  var mediatorRequestStub = sinon.stub();
  var mediatorMock = {request: mediatorRequestStub};


  beforeEach(function() {
    mediatorMock.request.reset();
  });


  it('Should remove all data', function() {
    buildMediatorStubs();
    return remove.removeData(mediatorMock);
  });


  /**
   * Build stubs to list and remove items
   * :list - should resolve to an array
   * :delete - resolves to an ID of the removed item
   */
  function buildMediatorStubs() {
    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'files:list').resolves(sampleData.files());
    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'groups:list').resolves(sampleData.groups());
    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'memberships:list').resolves(sampleData.memberships());
    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'messages:list').resolves(sampleData.messages());
    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'results:list').resolves(sampleData.results());
    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'workflows:list').resolves(sampleData.workflows());
    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'workorders:list').resolves(sampleData.workorders());

    sampleData.files().forEach(function(item) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'files:delete',
        item.id,
        {uid: item.id}
      ).resolves(item.id);
    });

    sampleData.groups().forEach(function(item) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'groups:delete',
        item.id,
        {uid: item.id}
      ).resolves(item.id);
    });

    sampleData.memberships().forEach(function(item) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'memberships:delete',
        item.id,
        {uid: item.id}
      ).resolves(item.id);
    });

    sampleData.messages().forEach(function(item) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'messages:delete',
        item.id,
        {uid: item.id}
      ).resolves(item.id);
    });

    sampleData.results().forEach(function(item) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'results:delete',
        item.id,
        {uid: item.id}
      ).resolves(item.id);
    });
    sampleData.workflows().forEach(function(item) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'workflows:delete',
        item.id,
        {uid: item.id}
      ).resolves(item.id);
    });

    sampleData.workorders().forEach(function(item) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'workorders:delete',
        item.id,
        {uid: item.id}
      ).resolves(item.id);
    });

  }

});


