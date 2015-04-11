'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:ProjetsCtrl
 * @description
 * # ProjetsCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ProjetsCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('./data/data.json').success(function(data) {
      $scope.donnee = data;
    });
    $(document).ready(function(){
      changeActive("Projets");
    });

  });


