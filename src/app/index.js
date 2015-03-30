'use strict';

angular.module('ajs12', ['ui.router', 'ngMaterial', 'ngMessages', 'pascalprecht.translate'])
  .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('registration', {
        url: '/registration',
        templateUrl: 'app/registration/registration.html',
        controller: 'RegistrationCtrl'
      });

    $urlRouterProvider.otherwise('/registration');
  })
;
