'use strict';

const fs = require('fs');
const os = require('os');

module.exports = {
  server: {
    host: '0.0.0.0',
    port: process.env.SERVICE_PORT || 3201,
  },
  metrics: {
    heartbeatInterval: Number(process.env.HEARTBEAT_INTERVAL) || 1000,
    commitSha: fs.readFileSync(__dirname + '/commit_sha', {encoding: 'utf-8'}) || 'manual-build',
    dockerHost: os.hostname(),
    version: process.env.npm_package_version || '',
  },
  postgres: {
    user: process.env.PGSQL_DB_USER || 'user',
    password: process.env.PGSQL_DB_PASSWORD || 'password',
    database: process.env.PGSQL_DB_NAME || 'database',
    host: process.env.PGSQL_DB_HOST || 'host',
    port: process.env.PGSQL_DB_PORT || 5432,
  }
};
