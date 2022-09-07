const { DataTypes } = require('sequelize');
const { database } = require('../../../database/config');
const User = require('../../user/model/user.model');


const Role = database.define( 'role', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
    } 
}, {
    timestamps: false
});

// One-To-Many relationships Role*<--->User
Role.hasMany( User, {
    foreignKey: 'roles_id',
    allowNull: true
});
User.belongsTo( Role, {
    foreignKey: 'roles_id',
    targetKey: 'id'
});

module.exports = Role;