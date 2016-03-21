(function(){
	'use strict';

 angular
 .module('invConnect')
 .controller('AddRequisitionController', AddRequisitionController);

 function AddRequisitionController(){
     var vm = this;
     vm.requisitionItems = [];
     vm.costCenters = [
     {
        Id:1,
        Name:'Neurology'
     }];

     vm.reqItemTypes = [
        {
            Id : 1,
            Name : 'Cracker,Cheese',
            Unit : 'unit1',
            Par :'par1',
            Quantity:1,

        },
        {
            Id : 3,
            Name : 'Milk',
            Unit : 'unit2',
            Par :'par2',
            Quantity:1,
        },
        {
            Id : 2,
            Name : 'Yogurt',
            Unit : 'unit3',
            Par :'par3',
            Quantity:1,
        }
     ];
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
            showWeeks:false
        };

        vm.open = function() {
            vm.popup.opened = true;
        };

        vm.setDate = function(year, month, day) {
            vm.dt = new Date(year, month, day);
        };

        vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'MM-dd-yyyy', 'shortDate'];
        vm.format = vm.formats[2];
        vm.altInputFormats = ['M!/d!/yyyy'];

        vm.popup = {
            opened: false
        };        

}
})();