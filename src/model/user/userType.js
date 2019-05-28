'use strict';

let {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'Users',
  fields: {
    USER_ID: {
      type: new GraphQLNonNull(GraphQLID),
    },
    USER_NAME: {
      type: new GraphQLNonNull(GraphQLString),
    },
    FIRST_NAME: {
      type: GraphQLString,
    },
    LAST_NAME: {
      type: GraphQLString,
    },
    USER_IMAGE: {
      type: GraphQLString,
    },
    PICKEM_POINTS: {
      type: GraphQLInt,
    },
  },
});
