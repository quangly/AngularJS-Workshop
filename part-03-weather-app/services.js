// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "Philadelphia, PA";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days) {
    	var appid = "REPLACE_WITH_YOUR_APP_ID"; //SIGN UP AT openweathermap.org
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=" + appid, 
        			{ callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherResult = weatherAPI.get({ q: city, cnt: days });
    };
    
}]);