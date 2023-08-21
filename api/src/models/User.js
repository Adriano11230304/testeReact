const { DataTypes } = require("sequelize");
const sequelize = require('../persistence/configDB');

const User = sequelize.define('User', {
    id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    modelName: 'users'
});

module.exports = { User };