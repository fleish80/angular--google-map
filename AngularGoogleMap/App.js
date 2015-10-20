/// <reference path="D:\Dev\AngularGoogleMap\AngularGoogleMap\Scripts/angular.js" />

var googleMapApp = angular.module('googleMapApp', []);

googleMapApp.controller('googleMapCtrl', ['$scope', function ($scope) {
    $scope.title = 'Some message';
}]);