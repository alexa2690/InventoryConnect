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

        vm.costCenters = [
            {
                name: 'All Cost Centers'
            }, 
            {
                name: 'Endicronology'
            },
            {
                name: 'First Floor Immunology'
            },
            {
                name: 'Ground Floor Immunology'
            },
            {
                name: 'Neurology'
            },
            {
                name: 'Orthopedics'
            },
            {
                name: 'Second Floor Immunology'
            },
            {
                name: 'Urology'
            }
        ];

        vm.filterByState = function(state) {
            vm.filtersModel.state = state;
        }
        
        vm.filterByCostCenter = function(costCenter) {
            if(costCenter !== undefined) {
               vm.filtersModel.costCenter = costCenter.name;
            }
        }
    }
})();
