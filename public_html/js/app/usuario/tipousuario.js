'use strict'

moduleUsuario.controller('tipousuarioController', ['$scope', '$http', '$location', 'toolService',
        function ($scope, $http, $location, toolService) {
            $scope.ruta = $location.path();
            $scope.var1 = "Hola mundo";
            $scope.var2 = "Hola qué tal";
            $scope.mostrar = false;
            $scope.activar = true;
            $scope.ajaxData = "";
            $scope.toggle = function () {
                $scope.mostrar = !$scope.mostrar;
            }
            $scope.enable = function () {
                $scope.activar = !$scope.activar;
            }
            
            var data;
        var optionSelected;
        var arrayPaginator;
        var rpp;
        var arrayList;
        var rppArray;
        var numRegistros;
        loadTable(500, 1);

$scope.viewReg = function (id) {
            var test = [];
            $http({
                method: 'GET',
                withCredentials: true,
                url: `http://localhost:8081/trolleyes/json?ob=tipousuario&op=get&id=${id}`
            }).then(function (response) {
                //$location.url(`/producto/plist/${id}`, false);
                test.push(response.data.message);
                console.log(data);
                $scope.datos = test;
                $scope.limitNgRepeat = 1;
                //mensajeError(response.data.message, enumMensaje.correcto);
            }, function (response) {
                console.log(response.msg);
                //mensajeError(response.data.message, enumMensaje.error);
            });
        }

        $scope.update = function () {
            optionSelected = $scope.selectedItem;
            $scope.limitNgRepeat = optionSelected;
        }

        function loadTable(numRegistros, page) {
            $http({
                method: 'GET',
                withCredentials: true,
                url: `http://localhost:8081/trolleyes/json?ob=tipousuario&op=getpage&rpp=${numRegistros}&page=${page}`
            }).then(function (response) {
                data = response.data.message;
                numRegistros = response.data.message.length;
                $scope.datos = response.data.message;
//                pagination();
                //mensajeError(response.data.message, enumMensaje.correcto);
            }, function (response) {
                console.log(response.msg);
                //mensajeError(response.data.message, enumMensaje.error);
            });
        }
        
//        function pagination() {
//            var numPags = numRegistros / optionSelected;
//            console.log(numRegistros,optionSelected);
//        }

        }
]);