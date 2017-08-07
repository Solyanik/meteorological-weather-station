angular.module('index', []).controller('main', ['$scope', '$http', function($scope, $http) {
   
    // Options
	$scope.data = {
		stationSelect: 0,
		search: ''
	};
	$scope.width = 1140;
    $scope.height = 500;
    $scope.yAxis = 'mm, tmax, tmin, af, rain, sun';
    $scope.xAxis = '';
    $scope.list_mws = [];
    $scope.line_tmax = true;
    $scope.line_tmin = false;
    $scope.line_af = false;
    $scope.line_rain = false;
    $scope.line_sun = false;

	$scope.filter = function () {

		var req = {
			method: 'GET',
			url: '/ajax?id=' + $scope.data.stationSelect
		}

		$('#ajax-loader').show();

		$http(req).then(function(response){
			
			$scope.list_mws = response.data.data;
			$('#h2-title-station').html(response.data.name);
			$('#ajax-loader').hide();
			
		}, function(error){
			$('.message-error').html(error);
			$('#ajax-loader').hide();
		});
			
	}

	//Graph
    // Data 
    $scope.set_list_mws = function (data) {
		$scope.list_mws = data;
		
		// Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
	    $scope.max_mm = 0;
	    $scope.max_tmax = 0;
	    $scope.max_tmin = 0;
	    $scope.max_af = 0;
	    $scope.max_rain = 0;
	    $scope.max_sun = 0;
	    
	    var arrLength = $scope.list_mws.length;
	    for (var i = 0; i < arrLength; i++) {
	        // Find Maximum X Axis Value

	        if ($scope.list_mws[i][2] > $scope.max_tmax)
	        	$scope.max_tmax = $scope.list_mws[i][2];
	        if ($scope.list_mws[i][3] > $scope.max_tmin)
	        	$scope.max_tmin = $scope.list_mws[i][3];
	        if ($scope.list_mws[i][4] > $scope.max_af)
	        	$scope.max_af = $scope.list_mws[i][4];
	        if ($scope.list_mws[i][5] > $scope.max_rain)
	        	$scope.max_rain = $scope.list_mws[i][5];
	        
	    }
    }
    
}]);