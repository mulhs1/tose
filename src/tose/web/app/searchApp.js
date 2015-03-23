angular.module('flickrSearch', [])
  .controller('stageOneCtrl', function ($scope, $http) {
<<<<<<< HEAD
    $http.get('https://tose.mimacom.com/ProFosService/service/searchMetadataService?query=test').success(function(imgdata) {
      $scope.imgdata = imgdata;
    });
=======
    $scope.init = function(query){
		$scope.query = query.split(' ').join('+');
		$scope.searchurl = 'https://tose.mimacom.com/ProFosService/service/searchMetadataService?query='+$scope.query;
		
		$http.get($scope.searchurl).success(function(imgdata) {
			$scope.imgdata = imgdata;
			console.log(imgdata);
		});
	}
>>>>>>> 1e2b8c8da46cd785dddd80242624bffa3d6e75e7
  });
  
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
