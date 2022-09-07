const { DataTypes } = require('sequelize');
const { database } = require('../../../database/config');
const Sale = require('../../sale/model/sale.model');


const Product = database.define( 'product', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }, 
    description: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }, 
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false
});
// One-To-Many relationships Product*<--->Sale
Product.hasMany( Sale, {
    foreignKey: 'products_id',
    allowNull: true
});
Sale.belongsTo( Product, {
    foreignKey: 'products_id',
    targetKey: 'id'
});

module.exports = Product;