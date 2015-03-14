angular.module('flickrSearch', [])
  .controller('stageOneCtrl', function ($scope, $http) {
    $http.get('app/dummy_pictures.json').success(function(dummy_pictures) {
      $scope.dummy_pictures = dummy_pictures;
    });
  });
  
  function WebServiceCall($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.imgdata = data;
        });
}
