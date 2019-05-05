'use strict';

const DAO = require('../../lib/dao');
const mySQLWrapper = require('../../lib/mysqlWrapper');
const util = require('../../util/util');

class UserGroup extends DAO {

  /**
   * Overrides TABLE_NAME with this class' backing table at MySQL
   */
  static get TABLE_NAME() {
    return 'USER_GROUPS';
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

  /**
   * Creates a new userGroups
   * @param {*} _
   * @param {Object} record - new record
   */
  static async joinGroup(_, { GROUP_NAME, GROUP_CODE, USER_ID }) {
    const connection = await mySQLWrapper.getConnectionFromPool();
    try {
      await this.insert(connection, {
        data: {
          GROUP_NAME,
          GROUP_CODE,
          USER_ID,
          CREATE_TIME: util.getDateTime()
        },
      });

      return (await this.findMatching(_, { GROUP_NAME }))[0];
    } finally {
      // Releases the connection
      if (connection != null) connection.release();
    }
  }
}

module.exports = UserGroup;
