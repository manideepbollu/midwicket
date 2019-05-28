'use strict';

const {
  GraphQLList,
  GraphQLInt,
} = require('graphql');
const userType = require('./userType');
const User = require('./user');

// Defines the queries
module.exports = {
  USERS: {
    type: new GraphQLList(userType),
    args: {
      USER_ID: {
        type: GraphQLInt,
      },
    },
    resolve: User.findMatching.bind(User),
  },
};