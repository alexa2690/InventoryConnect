(function(){
	
	'use strict';
	
	angular
    .module('invConnect')
    .factory('RequisitionService',requisitionService);
    requisitionService.$inject = ['$q'];

    //todo: pass Api Service here
    function requisitionService ($q){        

        //todo: remove mock data
         var reqItems = [
          {
              Id : 1,
              Name : 'Cracker,Cheese',
              Unit : 'unit1',
              Par :'par1'    ,
              Total :104          
          },
          {
              Id : 3,
              Name : 'Milk',
              Unit : 'unit2',
              Par :'par2'   ,
              Total :130           
          },
          {
              Id : 2,
              Name : 'Yogurt',
              Unit : 'unit3',
              Par :'par3'  ,
              Total :140            
          }
        ];

       var requisitions = [
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


        var reqService = {
            getRequistions : getRequistions,
            getRequisitonItems : getRequisitonItems,
            getRequisitonById : getRequisitonById,
            getCostCenters : getCostCenters
        }

        return reqService;
     
        //todo : api calls 
        function getRequistions (){             
             return requisitions;
        }

        function getRequisitonById(id){            
            return getByPropName(requisitions,'id',id);
        }

        function getRequisitonItems (){             
             return reqItems;
        }

        function getCostCenters (){

        }

        function addRequisiton (requisition)
        {
            requisitions.push(requisition);
        }

        //helper func

        function getByPropName(items,propName,propValue){
            for (var i = 0; i < items.length; i++) {
                if(items[i][propName] == propValue){
                    return items[i];
                }
            };
        }

    }

})();