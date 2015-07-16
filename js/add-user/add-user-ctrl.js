var addUser = angular.module('add-user', []);
addUser.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('add', {
		url: '/add',
		templateUrl: 'js/add-user/add-user.tpl' ,
		controller: 'AddUserCtrl'
	});
}).controller('AddUserCtrl', ['$rootScope','$scope', '$state','AddUserService', 'localStorageService','toastr', function($rootScope, $scope, $state,AddUserService, localStorageService, toastr) {
	$scope.addUserCtrl = {
		user: {}
	
	};
	console.log($rootScope.myContacts);
	//$scope.dummyContacts = $rootScope.myContacts;
	$scope.save = function(name) {

		console.log("saving",$rootScope.myContacts);
		
		$rootScope.myContacts.push(name);
		
		console.log("added",$rootScope.myContacts);
		localStorageService.remove("data");
		localStorageService.set("data", $rootScope.myContacts);
		
		console.log("saved",localStorageService.get("data"));
		
		toastr.success('Contact saved');
		$state.go('home');
		//});
	};
}]);