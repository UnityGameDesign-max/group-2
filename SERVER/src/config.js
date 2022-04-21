const databaseConfig = {
  server: "localhost",
  port: 1433,
  database: "ONLINESYSTEMS_",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
};

module.exports = databaseConfig;