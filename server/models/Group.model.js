const sequelize = require("../db");
const { DataTypes, } = require("sequelize");

module.exports = sequelize.define("group", {
    name: {
        type: DataTypes.TEXT,
        required: true,
    },
    photo: {
        type: DataTypes.TEXT,
        defaultValue: "default",
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, { tableName: "group", });