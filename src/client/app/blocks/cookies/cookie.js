(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('cookie', cookie);

  cookie.$inject = ['$cookies'];
  /* @ngInject */
  function cookie($cookies){
  var cookie = {};
	
	cookie.set = function(key,value){
		$cookies.put(key,value);
	};
	cookie.setObject = function(key,value){
		$cookies.putObject(key,value);
	};
	cookie.get = function(key){
		return $cookies.get(key);
	} 
	cookie.getAll = function(key){
		return $cookies.getAll(key);
	} 
	cookie.getObject = function(key){
		return $cookies.getObject(key);
	} 
	cookie.clearAll = function(){
		$cookies.removeAll();
	}
	cookie.clear = function(key){
		$cookies.remove(key);
	}
	
	return cookie;
  }
})();
