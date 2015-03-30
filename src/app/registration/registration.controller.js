'use strict';

angular.module('ajs12')
  .controller('RegistrationCtrl', function ($scope) {
    var model = this;

    model.message = '';

    model.user = {
      username: '',
      password: '',
      confirmPassword: '',
      email: ''
    };

    model.submit = function(isValid) {
      if (isValid) {
        model.message = 'Submitted ' + model.user.username;
      } else {
        model.message = 'There are still invalid fields below';
      }
    };
  });
