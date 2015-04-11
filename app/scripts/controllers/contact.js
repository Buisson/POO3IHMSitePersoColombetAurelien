'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:ProjetsCtrl
 * @description
 * # ProjetsCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ContactCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('./data/data.json').success(function(data) {
      $scope.donnee = data;
    });

    $scope.sendEmail = function(email, subject, body) {
      var link = "mailto:"+ email
        + "?subject=New%20email " + escape(subject)
        + "&body=" + escape(body);

      window.location.href = link;
    };

    $(document).ready(function(){
      $(".navbar-nav li").each(function() {
        changeActive("Me contacter");
      });
    });

  });


