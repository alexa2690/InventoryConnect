(function() {
  'use strict';

  angular
    .module('invConnect')
    .controller('ViewRequisitionsController', ViewRequisitionsController);
    
    function ViewRequisitionsController(){
        var vm = this;
        
        vm.costCenters = [
            {name: "Test"},
            {name: "test1"}
        ]
        
    }
})();
