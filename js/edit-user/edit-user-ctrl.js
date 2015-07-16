var edit = angular.module('edit-user', []);
edit.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('edit', {
		url: '/edit/:fname/:lname/:val',
		templateUrl: 'js/edit-user/edit-user.tpl' ,
		controller: 'EditUserCtrl'
	});
}).controller('EditUserCtrl', ['$rootScope','$scope','$stateParams','$state','localStorageService', 'toastr', function($rootScope, $scope,$stateParams,$state, localStorageService, toastr) {
		$scope.user = {
			fname :$stateParams.fname,
			lname :$stateParams.lname,
			index :$stateParams.val
		};
		console.log($rootScope.myContacts);
		$scope.save = function(value){
				console.log("edited", value);
				console.log("hsdjhg",$rootScope.myContacts);
				$rootScope.myContacts.splice($stateParams.val, 1 , value);
				console.log("new",$rootScope.myContacts);
				localStorageService.set("data",$rootScope.myContacts );
				toastr.success('Contact Updated');
				$state.go('home');
		};
		// $scope.Save = function(){
		// 	console.log("root scope", $rootScope.myContacts);
		// };
}]);
