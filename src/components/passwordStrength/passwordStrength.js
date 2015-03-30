'use strict';

angular.module('ajs12').directive('passwordStrength', function() {
  var isValid = function(s) {
    var first = s.charAt(0);
    return s && /^(?=.*[a-z])(?=.*[A-Z])(?=.*(_|[^\w])).+$/.test(s) && /^[A-Za-z][A-Za-z0-9 -]*$/.test(first);
  };

  return {
    require:'ngModel',
    restrict: 'A',
    link:function (scope, element, attrs, ngModel) {
      ngModel.$parsers.unshift(function (viewValue) {
        ngModel.$setValidity('strongPass', isValid(viewValue));
        return viewValue;
      });

      ngModel.$formatters.unshift(function (modelValue) {
        ngModel.$setValidity('strongPass', isValid(modelValue));
        return modelValue;
      });
    }
  };
});