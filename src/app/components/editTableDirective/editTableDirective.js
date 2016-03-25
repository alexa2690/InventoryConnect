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
                    $scope.packageSizes = [
                    {
                        Id:1,
                        Name:'pack'                           
                    },
                    {
                        Id:2,
                        Name:'unit'                           
                    }
                    ]
                    $scope.currentItem = {};
                    $scope.showAddRow = false;             
                    //todo:call controller methods
                    $scope.addRequisitionItem = function(){
                        $scope.showAddRow = true;    
                        $scope.currentItem = {};                    
                    }

                    $scope.removeRequisitionItem = function(reqItem){
                        //todo: call controller method
                        var index = $scope.itemsList.indexOf(reqItem);
                        $scope.itemsList.splice(index,1);
                    }

                    $scope.cancelAddItem = function(){                        
                        $scope.showAddRow = false;
                        $scope.currentItem = {};
                    }


                    $scope.onSelectCallback =  function(item,model){

                        $scope.currentItem.Name =  item.Name;
                        $scope.currentItem.Total =  item.Total;
                        $scope.currentItem.Par =  item.Par;
                    } 

                    $scope.addItem = function(){                        
                        $scope.itemsList.push($scope.currentItem);  
                        $scope.showAddRow = false;                      
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