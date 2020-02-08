var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Loja = require('./lojaApi/models/lojaModel'), //created model loading here
  Produto = require('./lojaApi/models/produtoModel')
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/lojadb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./lojaApi/routes/lojaRoutes'); //importing route
routes(app); //register the route

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);