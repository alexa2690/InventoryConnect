(function() {
    'use strict';

    angular
    .module('invConnect')
    .controller('ViewRequisitionsController', ViewRequisitionsController);

    function ViewRequisitionsController() {
        var vm = this;

        vm.filtersModel = {
            dateRange: {
                startDate : '',
                endDate: ''
            },
            state: undefined, 
            costCenter: undefined
        };
        
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
            }
        ];
        
        vm.requisitions = [
            {
                id : '000007',
                costCenter: 'Neurology',
                costCenterShortName: 'Neurology',
                reqDate: new Date('03/24/2016 09:24'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000006',
                costCenter: 'Orthopedics',
                costCenterShortName: 'Orthopedics',
                reqDate: new Date('03/24/2016 21:20'),
                modifyDate: new Date('03/23/2016 09:33'), 
                modifiedBy: 'Frank Doe',
                status: 'Closed'
            },
            {
                id : '000005',
                costCenter: 'Urology',
                costCenterShortName: 'Urology',
                reqDate: new Date('03/24/2016 09:18'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000004',
                costCenter: 'First Floor Immunology',
                costCenterShortName: 'FirstFloorImmunology',
                reqDate: new Date('03/23/2016 09:02'),
                modifyDate: new Date('03/23/2016 09:18'), 
                modifiedBy: 'Joe Johnson',
                status: 'Open'
            },
            {
                id : '000003',
                costCenter: 'Ground Floor Immunology',
                costCenterShortName: 'GroundFloorImmunology',
                reqDate: new Date('03/23/2016 08:45'),
                modifyDate: new Date('03/23/2016 13:35'), 
                modifiedBy: 'Joe Johnson',
                status: 'Closed'
            },
            {
                id : '000002',
                costCenter: 'Endicronology',
                costCenterShortName: 'Endicronology',
                reqDate: new Date('03/22/2016 08:33'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000001',
                costCenter: 'Second Floor Immunology',
                costCenterShortName: 'SecondFloorImmunology',
                reqDate: new Date('01/19/2016 20:00'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000007',
                costCenter: 'Neurology',
                costCenterShortName: 'Neurology',
                reqDate: new Date('03/24/2016 09:24'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000006',
                costCenter: 'Orthopedics',
                costCenterShortName: 'Orthopedics',
                reqDate: new Date('03/24/2016 21:20'),
                modifyDate: new Date('03/23/2016 09:33'), 
                modifiedBy: 'Frank Doe',
                status: 'Closed'
            },
            {
                id : '000005',
                costCenter: 'Urology',
                costCenterShortName: 'Urology',
                reqDate: new Date('03/24/2016 09:18'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000004',
                costCenter: 'First Floor Immunology',
                costCenterShortName: 'FirstFloorImmunology',
                reqDate: new Date('03/23/2016 09:02'),
                modifyDate: new Date('03/23/2016 09:18'), 
                modifiedBy: 'Joe Johnson',
                status: 'Open'
            },
            {
                id : '000003',
                costCenter: 'Ground Floor Immunology',
                costCenterShortName: 'GroundFloorImmunology',
                reqDate: new Date('03/23/2016 08:45'),
                modifyDate: new Date('03/23/2016 13:35'), 
                modifiedBy: 'Joe Johnson',
                status: 'Closed'
            },
            {
                id : '000002',
                costCenter: 'Endicronology',
                costCenterShortName: 'Endicronology',
                reqDate: new Date('03/22/2016 08:33'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000001',
                costCenter: 'Second Floor Immunology',
                costCenterShortName: 'SecondFloorImmunology',
                reqDate: new Date('01/19/2016 20:00'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000007',
                costCenter: 'Neurology',
                costCenterShortName: 'Neurology',
                reqDate: new Date('03/24/2016 09:24'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000006',
                costCenter: 'Orthopedics',
                costCenterShortName: 'Orthopedics',
                reqDate: new Date('03/24/2016 21:20'),
                modifyDate: new Date('03/23/2016 09:33'), 
                modifiedBy: 'Frank Doe',
                status: 'Closed'
            },
            {
                id : '000005',
                costCenter: 'Urology',
                costCenterShortName: 'Urology',
                reqDate: new Date('03/24/2016 09:18'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000004',
                costCenter: 'First Floor Immunology First Floor Immunology First Floor Immunology',
                costCenterShortName: 'FirstFloorImmunology',
                reqDate: new Date('03/23/2016 09:02'),
                modifyDate: new Date('03/23/2016 09:18'), 
                modifiedBy: 'Joe Johnson',
                status: 'Open'
            },
            {
                id : '000003',
                costCenter: 'Ground Floor Immunology',
                costCenterShortName: 'GroundFloorImmunology',
                reqDate: new Date('03/23/2016 08:45'),
                modifyDate: new Date('03/23/2016 13:35'), 
                modifiedBy: 'Joe Johnson',
                status: 'Closed'
            },
            {
                id : '000002',
                costCenter: 'Endicronology',
                costCenterShortName: 'Endicronology',
                reqDate: new Date('03/22/2016 08:33'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                id : '000001',
                costCenter: 'Second Floor Immunology',
                costCenterShortName: 'SecondFloorImmunology',
                reqDate: new Date('01/19/2016 20:00'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            }
        ];

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
