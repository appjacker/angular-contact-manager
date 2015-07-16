angular.module('home').factory('HomeService', function($http){
	return{
		loadList: function(){
			console.log("list");
			return $http.get ('api/contacts.json');
		}
	}
})