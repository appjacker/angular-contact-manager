angular.module('add-user').factory('AddUserService', function($http){
	return{
		addToList: function(name){
			console.log("done", name);
			return $http.post ('api/contacts.json' ,name);
		}
	}
})