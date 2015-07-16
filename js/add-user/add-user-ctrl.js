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
	
	$scope.save = function(name) {

		console.log("saving",$rootScope.myContacts);
		
		$rootScope.myContacts.push(name);
		localStorageService.remove("data");
		localStorageService.set("data", $rootScope.myContacts);
		toastr.success('Contact saved');
		$state.go('home');
	};
}]);