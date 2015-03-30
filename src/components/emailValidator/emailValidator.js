'use strict';

angular.module('ajs12').directive('emailValidator', function() {
  var isValid = function(s) {
    return s && /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(s);
  };

  return {
    require:'ngModel',
    restrict: 'A',
    link:function (scope, element, attrs, ngModel) {
      ngModel.$parsers.unshift(function (viewValue) {
        ngModel.$setValidity('emailValid', isValid(viewValue));
        return viewValue;
      });

      ngModel.$formatters.unshift(function (modelValue) {
        ngModel.$setValidity('emailValid', isValid(modelValue));
        return modelValue;
      });
    }
  };
});