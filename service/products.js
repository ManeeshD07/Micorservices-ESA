var productlist = require('../database/products.json')

var products = {
    find: function(req, res) {
        res.json(productlist);
    }
}

module.exports = products;