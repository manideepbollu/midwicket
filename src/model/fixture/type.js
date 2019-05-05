'use strict';

let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Fixture',
  description: 'A fixture',
  fields: {
    MATCH_ID: {
      type: new GraphQLNonNull(GraphQLID),
    },
    TOURNAMENT: {
      type: new GraphQLNonNull(GraphQLString),
    },
    TYPE: {
      type: new GraphQLNonNull(GraphQLString),
    },
    MATCH_DATETIME: {
      type: new GraphQLNonNull(GraphQLString),
    },
    HOME: {
      type: new GraphQLNonNull(GraphQLString),
    },
    AWAY: {
      type: new GraphQLNonNull(GraphQLString),
    },
    VENUE: {
      type: new GraphQLNonNull(GraphQLString),
    },
    TOSS: {
      type: new GraphQLNonNull(GraphQLString),
    },
    BAT: {
      type: new GraphQLNonNull(GraphQLString),
    },
    WINNER: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});
