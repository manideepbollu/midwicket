'use strict';

const DAO = require('../../lib/dao');
const mySQLWrapper = require('../../lib/mysqlWrapper');
const util = require('../../util/util');
const { isEmpty } = require('lodash');

class User extends DAO {

  /**
   * Overrides TABLE_NAME with this class' backing table at MySQL
   */
  static get TABLE_NAME() {
    return 'USERS';
  }

  /**
   * Returns a list of userGroups matching the passed fields
   * @param {*} _
   * @param {Object} fields - Fields to be matched
   */
  static async findMatching(_, fields) {
    // Returns early with all userGroups if no criteria was passed
    if (Object.keys(fields).length === 0) return this.findAll();

    // Find matching userGroups
    return this.findByFields({
      fields,
    });
  }

}

module.exports = User;
