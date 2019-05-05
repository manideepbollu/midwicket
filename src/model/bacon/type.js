'use strict';

let {
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLNonNull,
} = require('graphql');

// Defines the type
module.exports = new GraphQLObjectType({
  name: 'Bacon',
  description: 'A bacon',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    type: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  },
});
