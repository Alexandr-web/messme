const sequelize = require("../db");
const { DataTypes, } = require("sequelize");

module.exports = sequelize.define("user", {
    nickname: {
        type: DataTypes.TEXT,
        required: true,
        unique: true,
    },
    name: {
        type: DataTypes.TEXT,
        required: true,
    },
    lastname: {
        type: DataTypes.TEXT,
        required: true,
    },
    password: {
        type: DataTypes.TEXT,
        required: true,
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, { tableName: "user", });