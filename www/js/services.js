angular.module('ctciotsensors.services', [])

.factory('SensorService', function($http, MQTT_HOST, MQTT_PORT, MQTT_USERNAME, MQTT_PASSWORD) {

  var roomsResult = {}; 
	
  return {
	  
    sendPulse: function(sensorData , sendPulseCallBack) {
    	console.log("SensorService.sendPulse");
    	sensorData.host = MQTT_HOST;
    	sensorData.port = MQTT_PORT;
    	sensorData.user = MQTT_USERNAME;
    	sensorData.password = MQTT_PASSWORD;
    	sendMqttTracker(sensorData, sendPulseCallBack);
    }
		
  };
})
  
	
.factory('SystemService', function($http, $cordovaSQLite) {

  return {
	  
	prepareDatabase: function() {
		if (window.cordova) {
	      console.log("Connecting to database and creating tables");
	      db = $cordovaSQLite.openDB("ctcbigdataapp");
	      var query = "CREATE TABLE IF NOT EXISTS profile (username text primary key, emailaddress text, age integer)";
	      $cordovaSQLite.execute(db, query).then(function(res) {
	          console.log("Table is created ", res);
	          
	      }, function (err) {
	          console.error(err); 
	      });
	      
		} 
    }
  };
})
;

var db;