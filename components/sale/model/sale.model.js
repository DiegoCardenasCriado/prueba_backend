const { DataTypes } = require('sequelize');
const { database } = require('../../../database/config');


const Sale = database.define( 'sale', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    sale_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    }
}, {
    timestamps: false
}
);

module.exports = Sale;