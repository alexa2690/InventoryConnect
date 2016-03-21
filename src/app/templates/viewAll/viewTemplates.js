(function() {
  'use strict';

  angular
    .module('invConnect')
    .controller('ViewTemplatesController', ViewTemplatesController);
    
    function ViewTemplatesController(){
        var vm = this;
        
        vm.filtersModel = {
            costCenter : undefined
        }
        
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
        
        
        vm.filterByCostCenter = function(costCenter) {
            if(costCenter !== undefined) {
               vm.filtersModel.costCenter = costCenter.name;
            }
        }
    }
})();
