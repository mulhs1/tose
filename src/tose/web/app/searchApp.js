angular.module('flickrSearch', [])
  .controller('stageOneCtrl', function ($scope, $http) {
    $http.get('app/dummy_pictures.json').success(function(dummy_pictures) {
      $scope.dummy_pictures = dummy_pictures;
    });
  });
