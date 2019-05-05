'use strict';

const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const groupType = require('./groupType');
const userGroupType = require('./userGroupType');
const Group = require('./group');
const UserGroup = require('./userGroup');

// Defines the mutations
module.exports = {
  ADD_GROUP: {
    type: groupType,
    args: {
      GROUP_NAME: { type: new GraphQLNonNull(GraphQLString) },
      GROUP_CODE: { type: new GraphQLNonNull(GraphQLString) },
      USER_ID: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve: Group.createEntry.bind(Group),
  },
  // JOIN_GROUP: {
  //   type: userGroupType,
  //   args: {
  //     GROUP_NAME: { type: new GraphQLNonNull(GraphQLString) },
  //     GROUP_CODE: { type: new GraphQLNonNull(GraphQLString) },
  //     USER_ID: { type: new GraphQLNonNull(GraphQLInt) },
  //   },
  //   resolve: UserGroup.joinGroup.bind(UserGroup),
  // },
};
