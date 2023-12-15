const sequelize = require("../db");
const { DataTypes, } = require("sequelize");

module.exports = sequelize.define("message", {
    text: {
        type: DataTypes.TEXT,
        required: true,
    },
    date: {
        type: DataTypes.DATE,
        required: true,
        defaultValue: DataTypes.NOW,
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, { tableName: "message", });