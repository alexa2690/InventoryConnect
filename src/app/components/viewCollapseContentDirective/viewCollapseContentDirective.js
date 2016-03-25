(function(){
	
	'use strict';
	
	angular
    .module('invConnect')
    .directive('viewCollapseContentDirective', viewCollapseContentDirective);

    function viewCollapseContentDirective(){
   
    	//todo: use components
    	var directive = {
    		restrict : 'E',
            transclude : true,
            scope : {
                title : '@',                
            },
    		templateUrl :'app/components/viewCollapseContentDirective/viewCollapseContentDirective.html',    		
            link : function($scope,$element, $attrs, $controller){                    

                    $scope.isContentVisible = false;

                    $scope.toggleContent = function () {
                        $scope.isContentVisible = !$scope.isContentVisible;
                    }
            }
    	};

    	return directive;
    }

})();