'use strict';

angular.module('ajs12').directive('comparePassword', function() {
  return {
    require: 'ngModel',
    restrict: 'A',
    scope: {
      passwordValue: '=comparePassword'
    },
    link: function(scope, element, attrs, ngModel) {

      ngModel.$validators.comparePassword = function(modelValue) {
        return modelValue === scope.passwordValue;
      };

      scope.$watch('passwordValue', function() {
        ngModel.$validate();
      });
    }
  };
});