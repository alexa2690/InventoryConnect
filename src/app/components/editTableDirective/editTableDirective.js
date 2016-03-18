(function(){
	
	'use strict';
	
	angular
    .module('invConnect')
    .directive('editTableDirective', editTableDirective);

    function editTableDirective(){
   
    	//todo: use components
    	var directive = {
    		restrict : 'E',
    		templateUrl :'app/components/editTableDirective/editTableDirective.html',
    		scope : {
    			itemsList :'='
                //todo:pass add and delete methods from controller
    		},
            link : function($scope,$element, $attrs, $controller){

                    //scope methods
                    //todo: call controller method

                    $scope.addRequisitionItem = function(){
                        //todo: call controller method
                        $scope.itemsList.push(new RequisitionItem('itemName','unitName',5,4))
                    }

                    $scope.removeRequisitionItem = function(reqItem){
                        //todo: call controller method
                        var index = $scope.itemsList.indexOf(reqItem);
                        $scope.itemsList.splice(index,1);
                    }

                    function RequisitionItem(name,unit,par,qty){
                        this.Name = name;
                        this.Unit = unit;
                        this.Par = par;
                        this.Quantity = qty;
            } 

      
            }
    	};

    	return directive;
    }

})();