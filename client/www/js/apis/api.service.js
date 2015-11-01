'use strict';

angular.module('onlyGoOnce')
  .factory('ApiService', ApiService);
  
function ApiService($http, EnvironmentConfig) {
      console.log(EnvironmentConfig)
    var service = {},
       restaurantURL = EnvironmentConfig.api + '/api/restaurant/',
       historyURL = EnvironmentConfig.api + '/api/history/';

    service.getRestaurants =  function(latitude, longitude, number){
      return $http.get(restaurantURL + '?latitude='+ latitude + '&longitude=' + longitude + '&number=' + number);
    }
    
    service.getAllRestaurants = function(){
      return $http.get(restaurantURL + 'get-all-restaurants');
    }
      
    service.pushHistory = function(restaurant_id, goAgain){
      return $http({
            method: 'POST',
            url: historyURL,
            params : {restaurant_id: restaurant_id,
                      goAgain: goAgain}
        }); 
    }
    
    service.postLogs = function(restaurant_id){
      return $http({
            method: 'POST',
            url: historyURL + 'post-logs',
            params : {restaurant_id: restaurant_id}
        }); 
    }
    
    service.updateGoAgain = function(restaurant_id, goAgain){
      return $http({
            method: 'POST',
            url: historyURL + 'go-again' ,
            params : {restaurant_id: restaurant_id,
                      goAgain: goAgain}
        }); 
    }
    
    service.invalidateAll = function(){
      return $http({
            method: 'POST',
            url: historyURL + 'invalidate-all'
        }); 
    }
    
    return service

};
