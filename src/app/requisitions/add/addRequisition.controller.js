(function(){
	'use strict';

 angular
 .module('invConnect')
 .controller('AddRequisitionController', AddRequisitionController);

AddRequisitionController.$inject = ['$scope'];

 function AddRequisitionController($scope){
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
              Quantity:1

          },
          {
              Id : 3,
              Name : 'Milk',
              Unit : 'unit2',
              Par :'par2',
              Quantity:1
          },
          {
              Id : 2,
              Name : 'Yogurt',
              Unit : 'unit3',
              Par :'par3',
              Quantity:1
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
            showWeeks:false,            
        };


        vm.dateOptionsTest = {
            dateDisabled: false, 
            formatYear: 'yy',
            startingDay: 7,
            showWeeks:false,
            // customClass : getDayClass
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

        // $scope.selectDate = function(dt) {
        //  // vm.dt = dt;        
        // }

        // function startAndEndOfWeek(date) {
        //       // If no date object supplied, use current date
        //       // Copy date so don't modify supplied date
        //       var now = date? new Date(date) : new Date();

        //       // set time to some convenient value
        //       now.setHours(0,0,0,0);

        //       // Get the previous Monday
        //       var monday = new Date(now);
        //       monday.setDate(monday.getDate() - monday.getDay());

        //       // Get next Sunday
        //       var sunday = new Date(now);
        //       sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

        //       // Return array of date objects
        //       return [monday, sunday];
        //     }

     
        // $scope.getDayClass = function (data) {
        //     var date = data.date,
        //     mode = data.mode;
        //     var startAndEnd = startAndEndOfWeek(vm.dt);

        //     var firstday = startAndEnd[0];
        //     var lastday = startAndEnd[1];

        //     if(firstday <= date && lastday >= date){
        //         return 'selected-week-td';    
        //     }
        //     return '';
        //   }

}
})();