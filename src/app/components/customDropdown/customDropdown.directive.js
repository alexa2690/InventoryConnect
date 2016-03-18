(function() {
  'use strict';

  angular
    .module('invConnect')
    .directive('customDropdown', customDropdown);

  /** @ngInject */
  function customDropdown() {
    var directive = {
        replace: true,
        restrict: 'E',
        templateUrl: 'app/components/customDropdown/customDropdown.html',
        scope: {
            displayText: "=",
            list: "="
        }
    };

    return directive;
  }

})();
