'use strict';

const DAO = require('../../lib/dao');
const mySQLWrapper = require('../../lib/mysqlWrapper');

class Fixture extends DAO {

  /**
   * Overrides TABLE_NAME with this class' backing table at MySQL
   */
  static get TABLE_NAME() {
    return 'FIXTURES';
  }

  /**
   * Returns a list of fixtures matching the passed fields
   * @param {*} _ 
   * @param {Object} fields - Fields to be matched
   */
  static async findMatching(_, fields) {
    // Returns early with all fixtures if no criteria was passed
    if (Object.keys(fields).length === 0) return this.findAll();

    // Find matching bacons
    return this.findByFields({
      fields,
    });
  }

}

module.exports = Fixture;
