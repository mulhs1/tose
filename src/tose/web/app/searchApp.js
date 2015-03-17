angular.module('flickrSearch', [])
  .controller('stageOneCtrl', function ($scope, $http) {
    $scope.init = function(query){
		$scope.query = query.split(' ').join('+');
		$scope.searchurl = 'https://tose.mimacom.com/ProFosService/service/searchMetadataService?query='+$scope.query;
		
		$http.get($scope.searchurl).success(function(imgdata) {
			$scope.imgdata = imgdata;
			console.log(imgdata);
		});
	}
  });
  
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
