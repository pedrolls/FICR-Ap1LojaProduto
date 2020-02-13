'use strict';
module.exports = function(app) {
  var lojaController = require('../controllers/lojaController');
  var produtosController = require('../controllers/produtosController');

  // List Routes
  app.route('/loja')
    .get(lojaController.list_all)
    .get(lojaController.list_by_name)
    .post(lojaController.save_loja);

  app.route('/produtos')
  .get(produtosController.list_all_products)
  .get(produtosController.list_product_by_name)
  .get(produtosController.list_last)
  .post(produtosController.save);
};