const express      = require('express');
const cors         = require('cors');
const { database } = require('../../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 3000;

        this.routesPath = {
            product: '/api/v1/product',
            role: '/api/v1/role',
            sale: '/api/v1/sale',
            user: '/api/v1/user',
        }

        this.dbConnection();

        this.middlewares();
        
        this.routes();
    }

    async dbConnection() {
        try {
            await database.authenticate();
            console.log('Database online.');
        } catch (error) {
            throw new Error( error )
        }
    }

    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );
    }

    routes() {
        this.app.use( this.routesPath.product, require('../product/routes/product.routes'));
        this.app.use( this.routesPath.role, require('../role/routes/sole.routes'));
        this.app.use( this.routesPath.sale, require('../sale/routes/sale.routes'));
        this.app.use( this.routesPath.user, require('../user/routes/user.routes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Runing server on port:', this.port)
        });
    }
}

module.exports = Server;