const Sequelize = require("sequelize");
const db = require('../database')

const Orders = db.define(
    "orders",
    {
        order_id: {
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },  
        user_id: {
            type: Sequelize.INTEGER,
        },  
        products: {
            type: Sequelize.JSONB,
            primaryKey: true
        },
        total_price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        affiliate_id: {
            type: Sequelize.INTEGER,
        },
        created: {
            type: Sequelize.STRING,
        }
    },
    {
        freezeTableName: true 
    }
);


module.exports = Orders;