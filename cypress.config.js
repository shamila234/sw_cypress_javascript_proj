const { defineConfig } = require("cypress");
const pg = require("pg");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Create a task - with two parameters (config and sql)
      on("task", {
        QUERYDB({ dbConfig, sql }) {
          // Create a client - with config object
          const client = new pg.Pool(dbConfig)
          // Return result from sql
          return client.query(sql);
        },
      });
    },
    DBCONFIG: {
      user: "username",
      host: "localhost",
      database: "testing",
      password: "password",
      post: "5432",
    },
  },
});
