var app = angular.module('sortableTable', []);

app.controller('mainController', function($scope) {

  $scope.init = function(data,keys)
  {
    //This function is sort of private constructor for controller
    $scope.data = data;
    $scope.keys = keys; 
  };
  $scope.predicate='calories'
  $scope.reverse=true;
  $scope.order=function(predicate) {
  	$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
  	$scope.predicate = predicate;
  }


});