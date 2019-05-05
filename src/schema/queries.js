'use strict';

const { GraphQLObjectType } = require('graphql');
const baconQueries = require('../model/bacon/queries');
const fixtureQueries = require('../model/fixture/queries');

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    bacon: baconQueries.bacon,
    bacons: baconQueries.bacons,
    fixtures: fixtureQueries.fixtures,
  },
});
