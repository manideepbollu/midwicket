'use strict';

const {
  GraphQLList,
  GraphQLString,
} = require('graphql');
const type = require('./type');
const Fixture = require('./fixture');

// Defines the queries
module.exports = {
  FIXTURES: {
    type: new GraphQLList(type),
    args: {
      TYPE: {
        type: GraphQLString,
      },
      TOURNAMENT: {
        type: GraphQLString,
      },
      VENUE: {
        type: GraphQLString,
      },
    },
    resolve: Fixture.findMatching.bind(Fixture),
  },
};
