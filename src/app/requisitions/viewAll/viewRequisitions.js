(function() {
    'use strict';

    angular
    .module('invConnect')
    .controller('ViewRequisitionsController', ViewRequisitionsController);

    ViewRequisitionsController.$inject = ["RequisitionService"];

    function ViewRequisitionsController(RequisitionService) {
        var vm = this;

        vm.filtersModel = {
            dateRange: {
                startDate : '',
                endDate: ''
            },
            state: undefined, 
            costCenter: undefined
        };

                //date range picker
        vm.datePicker = {};
        vm.datePicker.date = { startDate: new Date(), endDate: new Date()};   
        
        vm.columnsOrderModel = [
            {
                column : 'costCenter',
                reverse : false
            },
            {
                column : 'reqDate',
                reverse : false
            },
            {
                column : 'id',
                reverse : false
            },
            {
                column : 'modifyDate',
                reverse : false
            }
        ];
        
        vm.orderModel = {
            column : 'costCenter',
            reverse : false
        };

        vm.costCenters = RequisitionService.getCostCenters();
        
        vm.requisitions = RequisitionService.getRequistions();
        
        vm.filterByState = function(state) {
            vm.filtersModel.state = state;
        }
        
        vm.filterByCostCenter = function(costCenter) {
            if(costCenter !== undefined) {
               vm.filtersModel.costCenter = costCenter.value;
            }
        }
        
        function getIndex(columnName) {
            for(var index = 0; index < vm.columnsOrderModel.length; index++) {
                if(vm.columnsOrderModel[index].column === columnName)
                {
                    return index;
                }
            }
            
            return -1;
        }
        
        vm.orderBy = function(column) {
            var indexColumn = getIndex(column);
            
            if(indexColumn !== -1) {
                vm.orderModel.column = column;
                vm.orderModel.reverse = !vm.columnsOrderModel[indexColumn].reverse;
                vm.columnsOrderModel[indexColumn].reverse = vm.orderModel.reverse;
            }
        }
        
        vm.getColumnCssClass = function(columnName) {
            if(vm.orderModel.column === columnName){
                if(vm.orderModel.reverse) {
                    return 'selected reverse';
                }
                
                return 'selected';
            }
            
            var indexColumn = getIndex(columnName);
            if(vm.columnsOrderModel[indexColumn].reverse) {
                return 'reverse';
            }
            
            return '';
        }
        
    }
})();
