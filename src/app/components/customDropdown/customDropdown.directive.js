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
            list: "=",
            onSelect: "&"
        },
        
        link : function($scope){
            $scope.initSelectedItem = function() {
                $scope.selectedItem = $scope.list != undefined && $scope.list.length > 0 ? $scope.list[0] : "";
            }
            
            $scope.setSelectedItem = function(choice) {
                $scope.selectedItem = choice;
                $scope.status.isopen = false;
                
                if($scope.onSelect != undefined) {
                    $scope.onSelect({item: choice});
                }
            }

            $scope.initSelectedItem();
        }
    };

    return directive;
  }

})();
