// const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('journal', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner: {
            type: DataTypes.INTEGER
        }
    })
    return Location;
}