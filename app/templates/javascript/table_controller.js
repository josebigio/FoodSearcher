var app = angular.module('sortableTable', []);

app.controller('mainController', function($scope) {

  $scope.init = function(data,keys)
  {
    //This function is sort of private constructor for controller
    $scope.data = [{ name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
    { name: 'Rainbow', fish: 'Variety', tastiness: 6 }];
    $scope.keys = keys; 
  };

  $scope.data = [{ name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
    { name: 'Rainbow', fish: 'Variety', tastiness: 6 }];

  $scope.predicate='calories'
  $scope.reverse=true;
  $scope.order=function(predicate) {
  	$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
  	$scope.predicate = predicate;
  }


});