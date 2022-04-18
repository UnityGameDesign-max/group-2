const sql = require('mssql/msnodesqlv8')

const databaseConfig = new sql.ConnectionPool({
  database: "ONLINESYSTEMS",
  server: "localhost",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  }
});

module.exports = databaseConfig;