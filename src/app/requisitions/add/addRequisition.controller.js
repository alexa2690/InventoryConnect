(function(){
	'use strict';

 angular
 .module('invConnect')
 .controller('AddRequisitionController', AddRequisitionController);

AddRequisitionController.$inject = ['$scope','RequisitionService'];

 function AddRequisitionController($scope,RequisitionService){
       var vm = this;
       vm.reqItems = RequisitionService.getRequisitonItems();
       vm.requisitionItems = [];

       vm.costCenters = [
       {
          Id:1,
          Name:'Neurology'
       }];

       //date picker
       //todo:move to directive
        vm.today = function() {
            vm.dt = new Date();
        };
        
        vm.today();
        vm.dateOptions = {
            dateDisabled: false, 
            formatYear: 'yy',
            startingDay: 7,
            showWeeks:false,      

        };

        vm.open = function() {
            vm.popup.opened = true;
        };

        vm.setDate = function(year, month, day) {
            vm.dt = new Date(year, month, day);
        };

        vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'MM/dd/yyyy', 'shortDate'];
        vm.format = vm.formats[2];
        vm.altInputFormats = ['M!/d!/yyyy'];

        vm.popup = {
            opened: false
        };          

        //date range picker
        vm.datePicker = {};
        vm.datePicker.date = { startDate: new Date(), endDate: new Date()};             

}
})();