var loginController = require('./controllers/loginController');
var usuarioController = require('./controllers/usuarioController');
var authController = require ('./controllers/authController');
var inventarioController = require('./controllers/inventarioController');
var facturaController = require('./controllers/facturaController');



exports.endpoints = [{method: 'GET', path: '/{param*}', config: {handler: function(request, reply){reply('API v1, Users')}}},
					 {method: 'GET', path: '/usuarios', config: usuarioController.getusuario},
           {method: 'POST', path: '/usuario', config: usuarioController.createusuario},
					 {method: 'PUT', path: '/usuario_put', config: usuarioController.putusuario},
					 {method: 'POST', path: '/login', config: authController.login},
					 {method: 'GET', path: '/logout', config: authController.logout},
					 {method: 'GET', path: '/v1/inventario', config: inventarioController.getinventarioSERVER},
			  		{method: 'POST', path: '/inventario', config: inventarioController.createinventarioSERVER},
			     {method: 'GET', path: '/v1/factura', config: facturaController.getfacturaSERVER},
			    	{method: 'POST', path: '/factura', config: facturaController.createfacturaSERVER},
			      {method: 'PUT', path: '/v2/factura', config: facturaController.modificarfacturaSERVER}];
