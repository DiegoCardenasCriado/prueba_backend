const Sale = require('../model/sale.model');

const saleGet = async( req, res ) => {

    try {
        const sales = await Sale.findAll();
        res.status(200).json({
            sales
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }
}

const salePost = async(req, res) => {
    
    const { id, ...body } = req.body;
    console.log(body);
    try {
        const sale = new Sale(body);
        await sale.save();

        res.status(201).json({
            msg: 'SALE SAVED!',
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }
}

const salePut = async(req, res) => {

    const { id } = req.params;
    const body = req.body;

    try {
        const sale = await Sale.findByPk( id );
        console.log( 'sale', sale );
        if ( !sale ) {
            return res.status(400).json({
                msg: 'The sale does not exist'
            });
        }
        sale.update( body );
        res.status(200).json({
            msg: 'UPDATED SALE!'
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }
}

const saleDelete = async(req, res) => {

    const { id } = req.params;
    
    try {
        const sale = await Sale.findByPk( id )
        if ( !sale ) {
            return res.status(400).json({
                msg: 'The sale does not exist'
            });
        }
            sale.destroy();
            res.status(200).json({
                msg: 'DELETED SALE!'
            });
            
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }
}

module.exports = {
    saleGet,
    salePut,
    salePost,
    saleDelete
}