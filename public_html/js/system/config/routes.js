trolleyes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl:'js/app/common/home.html', controller: 'homeController'});
        $routeProvider.when('/usuario/usuario', {templateUrl:'js/app/usuario/usuario.html', controller: 'usuarioController'});
        $routeProvider.when('/usuario/tipousuario/:id?', {templateUrl:'js/app/usuario/tipousuario.html', controller: 'tipousuarioController'});
        $routeProvider.when('/producto/producto/:rpp?/:page?', {templateUrl:'js/app/producto/producto.html', controller: 'productoController'});
        $routeProvider.when('/producto/tipoproducto/:id?', {templateUrl:'js/app/producto/tipoproducto.html', controller: 'tipoproductoController'});
        $routeProvider.when('/factura/factura', {templateUrl:'js/app/factura/factura.html', controller: 'facturaController'});
        $routeProvider.when('/factura/linea/:id?', {templateUrl:'js/app/factura/linea.html', controller: 'lineaController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);