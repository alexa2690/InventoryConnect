(function(){
	
	'use strict';
	
	angular
    .module('invConnect')
    .factory('RequisitionService',requisitionService);
    requisitionService.$inject = ['$q','$state'];

    //todo: pass Api Service here
    function requisitionService ($q,$state){        

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
                Id : 1,
                id : '000007',
                costCenter: 'Neurology',
                costCenterShortName: 'Neurology',
                reqDate: new Date('03/24/2016 09:24'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                Id : 2,
                id : '000006',
                costCenter: 'Orthopedics',
                costCenterShortName: 'Orthopedics',
                reqDate: new Date('03/24/2016 21:20'),
                modifyDate: new Date('03/23/2016 09:33'), 
                modifiedBy: 'Frank Doe',
                status: 'Closed'
            },
            {
                Id : 3,
                id : '000005',
                costCenter: 'Urology',
                costCenterShortName: 'Urology',
                reqDate: new Date('03/24/2016 09:18'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                Id : 4,
                id : '000004',
                costCenter: 'First Floor Immunology',
                costCenterShortName: 'FirstFloorImmunology',
                reqDate: new Date('03/23/2016 09:02'),
                modifyDate: new Date('03/23/2016 09:18'), 
                modifiedBy: 'Joe Johnson',
                status: 'Open'
            },
            {
                Id : 5,
                id : '000003',
                costCenter: 'Ground Floor Immunology',
                costCenterShortName: 'GroundFloorImmunology',
                reqDate: new Date('03/23/2016 08:45'),
                modifyDate: new Date('03/23/2016 13:35'), 
                modifiedBy: 'Joe Johnson',
                status: 'Closed'
            },
            {
                Id : 6,
                id : '000002',
                costCenter: 'Endicronology',
                costCenterShortName: 'Endicronology',
                reqDate: new Date('03/22/2016 08:33'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            {
                Id : 7,
                id : '000001',
                costCenter: 'Second Floor Immunology',
                costCenterShortName: 'SecondFloorImmunology',
                reqDate: new Date('01/19/2016 20:00'),
                modifyDate: undefined, 
                modifiedBy: undefined,
                status: 'Open'
            },
            // {
            //     Id : 8,
            //     id : '000007',
            //     costCenter: 'Neurology',
            //     costCenterShortName: 'Neurology',
            //     reqDate: new Date('03/24/2016 09:24'),
            //     modifyDate: undefined, 
            //     modifiedBy: undefined,
            //     status: 'Open'
            // },
            // {
            //     Id : 9,
            //     id : '000006',
            //     costCenter: 'Orthopedics',
            //     costCenterShortName: 'Orthopedics',
            //     reqDate: new Date('03/24/2016 21:20'),
            //     modifyDate: new Date('03/23/2016 09:33'), 
            //     modifiedBy: 'Frank Doe',
            //     status: 'Closed'
            // },
            // {
            //     Id : 10,
            //     id : '000005',
            //     costCenter: 'Urology',
            //     costCenterShortName: 'Urology',
            //     reqDate: new Date('03/24/2016 09:18'),
            //     modifyDate: undefined, 
            //     modifiedBy: undefined,
            //     status: 'Open'
            // },
            // {
            //     Id : 11,
            //     id : '000004',
            //     costCenter: 'First Floor Immunology',
            //     costCenterShortName: 'FirstFloorImmunology',
            //     reqDate: new Date('03/23/2016 09:02'),
            //     modifyDate: new Date('03/23/2016 09:18'), 
            //     modifiedBy: 'Joe Johnson',
            //     status: 'Open'
            // },
            // {
            //     Id : 12,
            //     id : '000003',
            //     costCenter: 'Ground Floor Immunology',
            //     costCenterShortName: 'GroundFloorImmunology',
            //     reqDate: new Date('03/23/2016 08:45'),
            //     modifyDate: new Date('03/23/2016 13:35'), 
            //     modifiedBy: 'Joe Johnson',
            //     status: 'Closed'
            // },
            // {
            //     Id : 13,
            //     id : '000002',
            //     costCenter: 'Endicronology',
            //     costCenterShortName: 'Endicronology',
            //     reqDate: new Date('03/22/2016 08:33'),
            //     modifyDate: undefined, 
            //     modifiedBy: undefined,
            //     status: 'Open'
            // },
            // {
            //     Id : 14,
            //     id : '000001',
            //     costCenter: 'Second Floor Immunology',
            //     costCenterShortName: 'SecondFloorImmunology',
            //     reqDate: new Date('01/19/2016 20:00'),
            //     modifyDate: undefined, 
            //     modifiedBy: undefined,
            //     status: 'Open',
            //     RequisitionItems : [
            //                {
            //                   Id : 1,
            //                   Name : 'Cracker,Cheese',
            //                   Unit : 'unit1',
            //                   Par :'par1'    ,
            //                   Total :104          
            //               },
            //               {
            //                   Id : 3,
            //                   Name : 'Milk',
            //                   Unit : 'unit2',
            //                   Par :'par2'   ,
            //                   Total :130           
            //               },
            //               {
            //                   Id : 2,
            //                   Name : 'Yogurt',
            //                   Unit : 'unit3',
            //                   Par :'par3'  ,
            //                   Total :140            
            //               }
            //                     ]
            // },
            // {
            //     Id : 15,
            //     id : '000007',
            //     costCenter: 'Neurology',
            //     costCenterShortName: 'Neurology',
            //     reqDate: new Date('03/24/2016 09:24'),
            //     modifyDate: undefined, 
            //     modifiedBy: undefined,
            //     status: 'Open'
            // },
            // {
            //     Id : 16,
            //     id : '000006',
            //     costCenter: 'Orthopedics',
            //     costCenterShortName: 'Orthopedics',
            //     reqDate: new Date('03/24/2016 21:20'),
            //     modifyDate: new Date('03/23/2016 09:33'), 
            //     modifiedBy: 'Frank Doe',
            //     status: 'Closed'
            // },
            // {
            //     Id : 17,
            //     id : '000005',
            //     costCenter: 'Urology',
            //     costCenterShortName: 'Urology',
            //     reqDate: new Date('03/24/2016 09:18'),
            //     modifyDate: undefined, 
            //     modifiedBy: undefined,
            //     status: 'Open'
            // },
            // {
            //     Id : 18,
            //     id : '000004',
            //     costCenter: 'First Floor Immunology First Floor Immunology First Floor Immunology',
            //     costCenterShortName: 'FirstFloorImmunology',
            //     reqDate: new Date('03/23/2016 09:02'),
            //     modifyDate: new Date('03/23/2016 09:18'), 
            //     modifiedBy: 'Joe Johnson',
            //     status: 'Open'
            // },
            // {
            //     Id : 19,
            //     id : '000003',
            //     costCenter: 'Ground Floor Immunology',
            //     costCenterShortName: 'GroundFloorImmunology',
            //     reqDate: new Date('03/23/2016 08:45'),
            //     modifyDate: new Date('03/23/2016 13:35'), 
            //     modifiedBy: 'Joe Johnson',
            //     status: 'Closed'
            // },
            // {
            //     Id : 20,
            //     id : '000002',
            //     costCenter: 'Endicronology',
            //     costCenterShortName: 'Endicronology',
            //     reqDate: new Date('03/22/2016 08:33'),
            //     modifyDate: undefined, 
            //     modifiedBy: undefined,
            //     status: 'Open'
            // },
            // {
            //     Id : 32,
            //     id : '000001',
            //     costCenter: 'Second Floor Immunology',
            //     costCenterShortName: 'SecondFloorImmunology',
            //     reqDate: new Date('01/19/2016 20:00'),
            //     modifyDate: undefined, 
            //     modifiedBy: undefined,
            //     status: 'Open'
            // }
        ];

        var costCenters = [
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

        var reqService = {
            getRequistions : getRequistions,
            getRequisitonItems : getRequisitonItems,
            getRequisitonById : getRequisitonById,
            getCostCenters : getCostCenters,
            addRequisiton : addRequisiton,
            deleteRequisition : deleteRequisition
        }

        return reqService;
     
        //todo : api calls 
        function getRequistions (){             
             return requisitions;
        }

        function getRequisitonById(id){     
            var requisition = getByPropName(requisitions,'Id',id);
            return requisition;
        }

        function getRequisitonItems (){             
             return reqItems;
        }

        function getCostCenters (){
            return costCenters
        }

        function addRequisiton (requisition)
        {
            requisitions.push(requisition);

        }

        function deleteRequisition (req){
            var index = requisitions.indexOf(req);
            requisitions.splice(index,1);
            $state.go('requisitions.all');
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