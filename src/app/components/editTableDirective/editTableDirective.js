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
    			itemsList :'=',
                dropdownItems : '='
    		},
            link : function($scope,$element, $attrs, $controller){

                    //scope methods
                    //todo: call controller method
                    $scope.showAddRow = false;                    
                    $scope.currentItem = {};
                    

                    $scope.addRequisitionItem = function(){
                        //todo: call controller method
                        if($scope.showAddRow){
                            var newItem = angular.copy($scope.currentItem.selected);
                            $scope.itemsList.push(newItem)
                        }
                        $scope.currentItem = {};
                        $scope.showAddRow = true;
                    }

                    $scope.removeRequisitionItem = function(reqItem){
                        //todo: call controller method
                        var index = $scope.itemsList.indexOf(reqItem);
                        $scope.itemsList.splice(index,1);
                    }

                    $scope.cancelAddItem = function(){
                        $scope.currentItem = {};
                        $scope.showAddRow = false;
                    }

                    $scope.$watch('currItemId',function(){
                        console.log($scope.currItemId);
                    })

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