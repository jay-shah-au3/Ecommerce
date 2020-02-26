const Sequelize = require("sequelize");
const db = require('../config/database')

const Affiliations = db.define(
  "affiliations",
  {
    affiliate_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement:true      
    },
    affiliate_name:{
      type:Sequelize.STRING,
    },
    revenue: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    user_id: {
      type:Sequelize.INTEGER
    }
  },
  {
    freezeTableName: true
  }
);

module.exports = Affiliations;