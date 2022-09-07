const { DataTypes } = require('sequelize');
const { database } = require('../../../database/config');
const Sale = require('../../sale/model/sale.model');

const User = database.define( 'user', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }, 
    last_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }, 
    document: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false,
    }
}, {
    timestamps: false
});
// One-To-Many relationships User*<--->Sale
User.hasMany( Sale, {
    foreignKey: 'users_id',
    allowNull: true
});
Sale.belongsTo( User, {
    foreignKey: 'users_id',
    targetKey: 'id'
});

module.exports = User;