var app = angular.module('app', []);

app.controller('mainController', function($scope) {
  $scope.enviar=function(data){
    console.log(data)
  }
});
