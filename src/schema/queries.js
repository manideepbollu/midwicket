'use strict';

const { GraphQLObjectType } = require('graphql');
const baconQueries = require('../model/bacon/queries');
const fixtureQueries = require('../model/fixture/queries');
const groupQueries = require('../model/group/queries');
const userQueries = require('../model/user/queries');

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    bacon: baconQueries.bacon,
    bacons: baconQueries.bacons,
    FIXTURES: fixtureQueries.FIXTURES,
    USER_GROUPS: groupQueries.USER_GROUPS,
    USERS: userQueries.USERS,
  },
});
