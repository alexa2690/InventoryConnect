(function() {
  'use strict';

  angular
    .module('invConnect')
    .controller('ViewTemplatesController', ViewTemplatesController);
    
    function ViewTemplatesController(){
        var vm = this;
        
        vm.filtersModel = {
            costCenter : undefined
        };
        
        vm.columnsOrderModel = [
            {
                column : 'name',
                reverse : false
            },
            {
                column : 'costCenter',
                reverse : false
            },
            {
                column : 'createdDate',
                reverse : false
            },
            {
                column : 'createdBy',
                reverse : false
            }
        ];
        
        vm.orderModel = {
            column : 'name',
            reverse : false
        };
        
        vm.costCenters = [
            {
                name: 'All Cost Centers',
                value: undefined
            }, 
            {
                name: 'Endicronology',
                value: 'Endicronology'
            },
            {
                name: 'First Floor Immunology',
                value: 'FirstFloorImmunology'
            },
            {
                name: 'Ground Floor Immunology',
                value: 'GroundFloorImmunology'
            },
            {
                name: 'Neurology',
                value: 'Neurology'
            },
            {
                name: 'Orthopedics',
                value: 'Orthopedics'
            },
            {
                name: 'Second Floor Immunology',
                value: 'SecondFloorImmunology'
            },
            {
                name: 'Urology',
                value: 'Urology'
            },
            {
                name: 'All Cost Centers',
                value: undefined
            }, 
            {
                name: 'Endicronology',
                value: 'Endicronology'
            },
            {
                name: 'First Floor Immunology',
                value: 'FirstFloorImmunology'
            },
            {
                name: 'Ground Floor Immunology',
                value: 'GroundFloorImmunology'
            },
            {
                name: 'Neurology',
                value: 'Neurology'
            },
            {
                name: 'Orthopedics',
                value: 'Orthopedics'
            },
            {
                name: 'Second Floor Immunology',
                value: 'SecondFloorImmunology'
            },
            {
                name: 'Urology',
                value: 'Urology'
            },
            {
                name: 'All Cost Centers',
                value: undefined
            }, 
            {
                name: 'Endicronology',
                value: 'Endicronology'
            },
            {
                name: 'First Floor Immunology',
                value: 'FirstFloorImmunology'
            },
            {
                name: 'Ground Floor Immunology',
                value: 'GroundFloorImmunology'
            },
            {
                name: 'Neurology',
                value: 'Neurology'
            },
            {
                name: 'Orthopedics',
                value: 'Orthopedics'
            },
            {
                name: 'Second Floor Immunology',
                value: 'SecondFloorImmunology'
            },
            {
                name: 'Urology',
                value: 'Urology'
            }
        ];
        
        vm.templates = [
            {
                name: 'Default template',
                costCenter: 'Endicronology',
                costCenterShortName: 'Endicronology',
                createdDate: '01/18/2016',
                createdBy: 'Frank Doe',
            },
            {
                name: 'Second template',
                costCenter: 'Endicronology',
                costCenterShortName: 'Endicronology',
                createdDate: '01/18/2016',
                createdBy: 'Frank Doe',
            },
            {
                name: 'Default',
                costCenter: 'First Floor',
                costCenterShortName: 'FirstFloor',
                createdDate: '01/11/2016',
                createdBy: 'Frank Doe',
            },
            {
                name: 'Friday template Friday template Friday template Friday template Friday template',
                costCenter: 'Neurology',
                costCenterShortName: 'Neurology',
                createdDate: '12/20/2015',
                createdBy: 'Frank Doe',
            },
            {
                name: 'Needs',
                costCenter: 'Urology Urology Urology Urology Urology',
                costCenterShortName: 'Urology',
                createdDate: '12/11/2013',
                createdBy: 'Frank Doe',
            },
            {
                name: 'Monday Template',
                costCenter: 'Neurology',
                costCenterShortName: 'Neurology',
                createdDate: '10/08/2015',
                createdBy: 'Frank Doe',
            }
        ];
        
        
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
