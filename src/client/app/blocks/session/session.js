(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('session', session);

  session.$inject = ['$window','constants'];
  /* @ngInject */
  function session($window,constants){
  var session = {};
	
	session.set = function(key,value){
		$window.sessionStorage.setItem(key,value);
	};
	session.get = function(key){
		return $window.sessionStorage.getItem(key);
	} 
	session.clearAll = function(){
		$window.sessionStorage.clear();
	}
	session.clear = function(key){
		$window.sessionStorage.removeItem(key);
	}
	
	return session;
  }
})();
