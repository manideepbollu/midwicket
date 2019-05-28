'use strict';

let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'UserGroup',
  description: 'User Groups',
  fields: {
    GROUP_NAME: {
      type: new GraphQLNonNull(GraphQLString),
    },
    GROUP_CODE: {
      type: new GraphQLNonNull(GraphQLString),
    },
    USER_ID: {
      type: new GraphQLNonNull(GraphQLID),
    },
    USERS: {
      type: new GraphQLNonNull(GraphQLID),
    },
    CREATE_TIME: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});
