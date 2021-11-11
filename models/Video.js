const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/DB");

const video = sequelize.define(
  "video",
  {
    video_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = video;
