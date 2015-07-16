var home = angular.module('home', []);
home.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'js/home/home.tpl' ,
		controller: 'homeCtrl'
	});
}).controller('homeCtrl', ['$rootScope','$scope','$state','HomeService', 'localStorageService', 'toastr', function($rootScope, $scope, $state, HomeService, localStorageService, toastr) {
	
	if(!localStorageService.get("data")){

		HomeService.loadList().success(function(response){
			console.log('contact received',response.contacts);
			localStorageService.set("data",response.contacts);

		});

		$scope.contacts = localStorageService.get("data");
		$rootScope.myContacts = $scope.contacts;

	}else{

		console.log("else",$rootScope.myContacts);
		$scope.contacts = localStorageService.get("data");
		$rootScope.myContacts = $scope.contacts;
		console.log("$rootScope", $rootScope.myContacts);
		console.log("root", localStorageService.get("data"));


	}

	$scope.goToEditState = function(person, index){
		console.log('inside edit', person);
		console.log('inside index', index);
		$state.go('edit', {fname: person.fname, lname:person.lname, val:index});

	};

	$scope.deleteContact = function(index){
			$rootScope.myContacts.splice(index,1);
			$scope.contacts = $rootScope.myContacts;
			localStorageService.set("data", $scope.contacts);
			toastr.success('Contact Deleted');

			// localStorageService.remove("data");
			// localStorageService.set("data", $rootScope.myContacts);
			// console.log("delete", localStorageService.get("data"));

	};

}]);
