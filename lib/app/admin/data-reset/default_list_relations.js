
// default demo relations mapping - workorders are dependent on workflows (through workflowId)
// and memberships is dependent on groups
module.exports = {
  workorders: 'workflows',
  memberships: 'groups'
};