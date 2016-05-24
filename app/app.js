'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngAnimate']);
app.controller('mycontroller', function($scope, $timeout) {
	$scope.article = '1';
	$scope.time = '400';
	console.log("aaaaaaa");
	function doSomething() {
		if(true){
			switch($scope.article){
			case "1":
				$scope.article = "2";
				break;
			case "2":
				$scope.article = "3";
				break;	
			case "3":
				$scope.article = "4";
				break;	
			case "4":
				$scope.article = "5";
				break;	
			case "5":
				$scope.article = "6";
				break;	
			case "6":
				$scope.article = "1";
				break;			
			default:
				$scope.article = "1";
			}
		}
		$timeout(doSomething, 3000);	  	  
	}
	$timeout(doSomething, 3000);
});