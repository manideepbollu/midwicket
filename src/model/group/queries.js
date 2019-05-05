'use strict';

const {
  GraphQLList,
  GraphQLInt,
} = require('graphql');
const userGroupType = require('./userGroupType');
const UserGroup = require('./userGroup');

// Defines the queries
module.exports = {
  USER_GROUPS: {
    type: new GraphQLList(userGroupType),
    args: {
      USER_ID: {
        type: GraphQLInt,
      },
    },
    resolve: UserGroup.findMatching.bind(UserGroup),
  },
};
