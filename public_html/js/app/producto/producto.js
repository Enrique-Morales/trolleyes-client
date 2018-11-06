'use strict'

moduleProducto.controller('productoController', ['$scope', '$http', '$location', 'toolService', '$routeParams',
    function ($scope, $http, $location, toolService, $routeParams) {
        $scope.totalPages = 1;
        if (!$routeParams.rpp) {
            $scope.rpp = 10;
            $scope.before=false;
            $scope.after=true;
        } else {

            $scope.rpp = $routeParams.rpp;
        }
        if (!$routeParams.page) {
            $scope.page = 1;
        } else {
            if ($routeParams.page >= 1) {
                $scope.page = $routeParams.page;
            } else {
                $scope.page = 1;
            }
        }
        
        
        if(!$routeParams.rpp){
            $http({
            method: 'GET',
            url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getcount'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataProductosNumber = response.data.message;
            $scope.totalPages = Math.ceil($scope.ajaxDataProductosNumber / $scope.rpp);
            $scope.list = [];
            for (var i = 2; i < $scope.totalPages; i++) {
                if (i<3) {
                $scope.list.push(i);    
                }
                
            }
        }, function (response) {
            $scope.ajaxDataProductosNumber = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
        } else {
            $http({
            method: 'GET',
            url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getcount'
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataProductosNumber = response.data.message;
            $scope.totalPages = Math.ceil($scope.ajaxDataProductosNumber / $routeParams.rpp);
            paginationL($routeParams.page);
        }, function (response) {
            $scope.ajaxDataProductosNumber = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
            
        }
        
        

        $http({
            method: 'GET',
            url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getpage&rpp=' + $scope.rpp + '&page=' + $scope.page
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataProductos = response.data.message;
        }, function (response) {
            $scope.ajaxDataProductos = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
        $scope.isActive = toolService.isActive;
        
        $scope.update=function() {
            $scope.page=1;
            $scope.before=false;
            
            $http({
            method: 'GET',
            url: 'http://localhost:8081/trolleyes/json?ob=producto&op=getpage&rpp=' + $scope.rpp + '&page=' + $scope.page
        }).then(function (response) {
            $scope.status = response.status;
            $scope.ajaxDataProductos = response.data.message;
        }, function (response) {
            $scope.ajaxDataProductos = response.data.message || 'Request failed';
            $scope.status = response.status;
        });
        
        $scope.totalPages = Math.ceil($scope.ajaxDataProductosNumber / $scope.rpp);
            $scope.list = [];
            for (var i = 2; i < $scope.totalPages; i++) {
                if(i<3||i==$scope.totalPages)
                $scope.list.push(i);
            }
            if($scope.totalPages>3) {
                $scope.after=true;
            } else {
                $scope.after=false;
            }
        
        }
        
        function paginationL(pag){
            $scope.list = [];
            for (var i = 2; i < $scope.totalPages; i++) {
                if(i==(parseInt(pag)-1)||i==(parseInt(pag))||i==(parseInt(pag)+1)){
                   $scope.list.push(i); 
                }
                
            }
            
            if(pag>3){
                $scope.before=true;
            } else {
                $scope.before=false;
            }
            
            if(pag<=$scope.totalPages-3) {
                $scope.after=true;
            } else {
                $scope.after=false;
            }
        }
        
        $scope.pagination=function(pag) {
            $scope.list = [];
            for (var i = 1; i < $scope.totalPages; i++) {
                if(i==(pag.p-1)||i==(pag.p)||i==(pag.p+1)){
                   $scope.list.push(i); 
                }
                
            }
            if(pag.p>3){
                $scope.before=true;
            } else {
                $scope.before=false;
            }
            
            if(pag.p<=$scope.totalPages-3) {
                $scope.after=true;
            } else {
                $scope.after=false;
            }
            
        }
        
    }
]);