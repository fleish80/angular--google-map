/// <reference path="D:\Dev\AngularGoogleMap\AngularGoogleMap\Scripts/angular.js" />

var googleMapApp = angular.module('googleMapApp', ['uiGmapgoogle-maps']);


googleMapApp.controller('googleMapCtrl', ['$scope', function ($scope) {
    $scope.title = 'Some message';
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
}]);