'use strict';
module.exports = function(app) {
  var lojaController = require('../controllers/lojaController');
  var produtosController = require('../controllers/produtosController');

  // List Routes
  app.route('/loja')
    .get(lojaController.list_all)
    .post(lojaController.save_loja);
  app.route('/loja/:name')
    .get(lojaController.list_by_name)

  app.route('/produtos')
  .get(produtosController.list_all_products)
  .get(produtosController.list_last)
  .post(produtosController.save);
  app.route('/produtos/:name')
  .get(produtosController.list_product_by_name)
  
};