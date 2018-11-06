'use strict'

var trolleyes = angular.module('MyApp', [
    'ngRoute',
    'services',
    'commonControllers',
    'usuarioControllers',
    'productoControllers',
    'facturaControllers'
]);


var moduleCommon = angular.module ('commonControllers',[]);
var moduleService = angular.module ('services',[]);
var moduleUsuario = angular.module ('usuarioControllers',[]);
var moduleProducto = angular.module('productoControllers', []);
var moduleFactura = angular.module('facturaControllers', []);
