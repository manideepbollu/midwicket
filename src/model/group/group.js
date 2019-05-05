'use strict';

const DAO = require('../../lib/dao');
const mySQLWrapper = require('../../lib/mysqlWrapper');
const util = require('../../util/util');

class Group extends DAO {

  /**
   * Overrides TABLE_NAME with this class' backing table at MySQL
   */
  static get TABLE_NAME() {
    return 'GROUPS';
  }

  /**
   * Returns a list of groups matching the passed fields
   * @param {*} _
   * @param {Object} fields - Fields to be matched
   */
  static async findMatching(_, fields) {
    // Returns early with all groups if no criteria was passed
    if (Object.keys(fields).length === 0) return this.findAll();

    // Find matching groups
    return this.findByFields({
      fields,
    });
  }

  /**
   * Creates a new group
   * @param {*} _
   * @param {Object} record - new record
   */
  static async createEntry(_, { GROUP_NAME, GROUP_CODE, USER_ID }) {
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

module.exports = Group;
