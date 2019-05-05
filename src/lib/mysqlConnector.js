'use strict';

const mysql = require('mysql');

class MySQLConnector {

  constructor() {
    // Instantiates the connection pool
    this.internalPool = mysql.createPool({
      host: process.env.MYSQL_DB_HOST,
      port: process.env.MYSQL_DB_PORT,
      database: process.env.MYSQL_DB_NAME,
      user: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASSWORD,
      connectionLimit: process.env.MYSQL_DB_POOL_SIZE,
      waitForConnections: true,
    });

    // Allows better control of opened connections
    this.registerThreadCounter();
  }

  /**
   * Registers an event lister to capture when new connections are oppened
   * This method uses console.log, but in an production environment you'd probably
   * use a async log write such as winston since console.log is blocking
   */
  registerThreadCounter() {
    this.internalPool.on('connection', (connection) =>
      console.log(`New connection stablished with server on thread #${connection.threadId}`)
    );
  }

  /**
   * Retrieves the connection pool
   */
  get pool() {
    return this.internalPool;
  }
}

// Exports the connector singleton to be used by the wrapper
module.exports = new MySQLConnector();
