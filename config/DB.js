const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("videos", "smd", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log("Database Connected ..."))
  .catch((err) => console.log("Some Problem . Database not Connected ."));

module.exports = sequelize;
