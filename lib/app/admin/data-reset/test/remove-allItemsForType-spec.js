var sinon = require('sinon');
require('sinon-as-promised');

var remove = require('../remove');
var sampleData = require('../data-demo/index');
var CLOUD_TOPIC_PREFIX  = require('../topics_constants').CLOUD_TOPIC_PREFIX;


describe('Test remove all items for type', function() {
  var mediatorRequestStub = sinon.stub();
  var mediatorMock = {request: mediatorRequestStub};

  beforeEach(function() {
    mediatorMock.request.reset();

  });

  it('Should remove all files', function() {
    sampleData.workorders().forEach( function(file) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'files:delete',
        file.id,
        {uid: file.id}
      ).resolves(file.id);
    });

    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'files:list').resolves(sampleData.files());

    return remove.removeAllItemsForType(mediatorMock, 'files');
  });


  it('Should remove all groups', function() {
    sampleData.groups().forEach( function(group) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'groups:delete',
        group.id,
        {uid: group.id}
      ).resolves(group.id);
    });

    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'groups:list').resolves(sampleData.groups());

    return remove.removeAllItemsForType(mediatorMock, 'groups');
  });


  it('Should remove all memberships', function() {
    sampleData.memberships().forEach( function(membership) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'memberships:delete',
        membership.id,
        {uid: membership.id}
      ).resolves(membership.id);
    });

    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'memberships:list').resolves(sampleData.memberships());

    return remove.removeAllItemsForType(mediatorMock, 'memberships');
  });


  it('Should remove all messages', function() {
    sampleData.messages().forEach( function(message) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'messages:delete',
        message.id,
        {uid: message.id}
      ).resolves(message.id);
    });

    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'messages:list').resolves(sampleData.messages());

    return remove.removeAllItemsForType(mediatorMock, 'messages');
  });


  it('Should remove all results', function() {
    sampleData.results().forEach( function(result) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'results:delete',
        result.id,
        {uid: result.id}
      ).resolves(result.id);
    });

    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'results:list').resolves(sampleData.results());

    return remove.removeAllItemsForType(mediatorMock, 'results');
  });


  it('Should remove all workflows', function() {
    sampleData.workflows().forEach( function(workflow) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'workflows:delete',
        workflow.id,
        {uid: workflow.id}
      ).resolves(workflow.id);
    });

    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'workflows:list').resolves(sampleData.workflows());

    return remove.removeAllItemsForType(mediatorMock, 'workflows');
  });

  it('Should remove all workorders', function() {
    sampleData.workorders().forEach( function(workorder) {
      mediatorRequestStub.withArgs(
        CLOUD_TOPIC_PREFIX + 'workorders:delete',
        workorder.id,
        {uid: workorder.id}
      ).resolves(workorder.id);
    });

    mediatorRequestStub.withArgs(CLOUD_TOPIC_PREFIX + 'workorders:list').resolves(sampleData.workorders());

    return remove.removeAllItemsForType(mediatorMock, 'workorders');
  });

});