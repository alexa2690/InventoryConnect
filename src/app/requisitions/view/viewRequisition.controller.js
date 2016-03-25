(function() {
  'use strict';

  angular
    .module('invConnect')
    .controller('ViewRequisitionController', ViewRequisitionController);

    ViewRequisitionController.$inject = ['RequisitionService','$stateParams']

    function ViewRequisitionController(RequisitionService,$stateParams) {

    	var vm = this;
    	vm.requisition = RequisitionService.getRequisitonById($stateParams.id);
    	vm.reqItems = RequisitionService.getRequisitonItems();
    }
    
})();
