'use strict';

const DAO = require('../../lib/dao');
const mySQLWrapper = require('../../lib/mysqlWrapper');

class Bacon extends DAO {

  /**
   * Overrides TABLE_NAME with this class' backing table at MySQL
   */
  static get TABLE_NAME() {
    return 'bacons';
  }

  /**
   * Returns a bacon by its ID
   * @param {*} _ 
   * @param {Number} id - selector id
   */
  static async getByID(_, { id }) {
    return await this.find(id);
  }

  /**
   * Returns a list of bacons matching the passed fields
   * @param {*} _ 
   * @param {Object} fields - Fields to be matched
   */
  static async findMatching(_, fields) {
    // Returns early with all bacons if no criteria was passed
    if (Object.keys(fields).length === 0) return this.findAll();

    // Find matching bacons
    return this.findByFields({
      fields,
    });
  }

  /**
   * Creates a new bacon
   * @param {*} _ 
   * @param {Object} record - new record
   */
  static async createEntry(_, { type, price }) {
    const connection = await mySQLWrapper.getConnectionFromPool();
    try {
      let _result = await this.insert(connection, {
        data: {
          type,
          price,
        },
      });

      return this.getByID(_, { id: _result.insertId });
    } finally {
      // Releases the connection
      if (connection != null) connection.release();
    }
  }

  /**
   * Updates a bacon
   * @param {*} _ 
   * @param {Object} record - record with new values
   */
  static async updateEntry(_, { id, type, price }) {
    const connection = await mySQLWrapper.getConnectionFromPool();
    try {

      await this.update(connection, {
        id,
        data: {
          type,
          price,
        },
      });

      return this.getByID(_, { id });
    } finally {
      // Releases the connection
      if (connection != null) connection.release();
    }
  }
}

module.exports = Bacon;
