'use strict';

const { GraphQLObjectType } = require('graphql');
const baconMutation = require('../model/bacon/mutations');
const groupMutation = require('../model/group/mutations');

module.exports = new GraphQLObjectType({
  name: 'RootMutationsType',
  fields: {
    addBacon: baconMutation.addBacon,
    updateBacon: baconMutation.updateBacon,
    ADD_GROUP: groupMutation.ADD_GROUP,
  },
});
