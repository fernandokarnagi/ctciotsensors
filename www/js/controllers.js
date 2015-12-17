angular.module('ctciotsensors.controllers', [])

.controller('PulseCtrl', function($scope, $state, $window, $stateParams, SensorService) {
	
	$scope.sensor = {};
	
	$scope.sensor.value = '';
	$scope.sensor.valueDisplay = '-';
	$scope.sensor.clientid = 'Heart.Sensor.1';
	$scope.sensor.low = 70;
	$scope.sensor.high = 120;
	$scope.sensor.type = "Heart";
	$scope.sensor.state = false;
	$scope.allowedToSend = true;
	
	$scope.startSensorCallBack = function() {
		$scope.allowedToSend = true;
	};
	
	$scope.startSensor = function() {
		setTimeout(function () {   
		      if($scope.sensor.state && $scope.allowedToSend) {    
		    	  $scope.allowedToSend = false;
		    	  $scope.sensor.value = randomNumber($scope.sensor.low, $scope.sensor.high);
		    	  $scope.sensor.valueDisplay = $scope.sensor.value + " bpm";
		    	  $scope.$apply();
		    	  $scope.startSensor();   
		    	  SensorService.sendPulse($scope.sensor, $scope.startSensorCallBack);	
		      }                        
		   }, 1000) 
	};
})

.controller('WelcomeCtrl', function($scope, $state, $window, $stateParams, SensorService) {
 
})

.controller('RainCtrl', function($scope, $state, $window, $stateParams, SensorService) {
	$scope.sensor = {};
	
	$scope.sensor.value = '';
	$scope.sensor.valueDisplay = '-';
	$scope.sensor.clientid = 'Rain.Sensor.1';
	$scope.sensor.low = 4;
	$scope.sensor.high = 100;
	$scope.sensor.type = "Rain";
	$scope.sensor.state = false;
	$scope.allowedToSend = true;
	
	$scope.startSensorCallBack = function() {
		$scope.allowedToSend = true;
	};
	
	$scope.startSensor = function() {
		setTimeout(function () {   
			if($scope.sensor.state && $scope.allowedToSend) {    
		    	  $scope.allowedToSend = false;
		    	  $scope.sensor.value = randomNumber($scope.sensor.low, $scope.sensor.high);
		    	  $scope.sensor.valueDisplay = $scope.sensor.value + " mm/hr";
		    	  $scope.$apply();
		    	  $scope.startSensor();   
		    	  SensorService.sendPulse($scope.sensor, $scope.startSensorCallBack);	
		      }                          
		   }, 1000) 
	}
})

.controller('TemparatureCtrl', function($scope, $state, $window, $stateParams, SensorService) {
$scope.sensor = {};
	
	$scope.sensor.value = '';
	$scope.sensor.valueDisplay = '-';
	$scope.sensor.clientid = 'Temparature.Sensor.1';
	$scope.sensor.low = 20;
	$scope.sensor.high = 33;
	$scope.sensor.type = "Temparature";
	$scope.sensor.state = false;
	$scope.allowedToSend = true;
	
	$scope.startSensorCallBack = function() {
		$scope.allowedToSend = true;
	};
	
	$scope.startSensor = function() {
		console.log(this);
		console.log($scope.sensor.state);
		
		setTimeout(function () {   
			 if($scope.sensor.state && $scope.allowedToSend) {    
		    	  $scope.allowedToSend = false;
		    	  $scope.sensor.value = randomNumber($scope.sensor.low, $scope.sensor.high);
		    	  $scope.sensor.valueDisplay = $scope.sensor.value + " deg C";
		    	  $scope.$apply();
		    	  $scope.startSensor();   
		    	  SensorService.sendPulse($scope.sensor, $scope.startSensorCallBack);	
		      }                          
		   }, 1000) 
	}
})

;