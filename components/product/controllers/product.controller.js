const Product = require('../model/product.model');

const productGet = async( req, res ) => {

    try {
        const products = await Product.findAll();
        res.status(200).json({
            products
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }
}

const productPost = async(req, res) => {
    
    const { id, ...body } = req.body;
    console.log(body);
    try {
        const product = new Product(body);
        await product.save();

        res.status(201).json({
            msg: 'product SAVED!',
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }
}

module.exports = {
    productGet,
    productPost,
}