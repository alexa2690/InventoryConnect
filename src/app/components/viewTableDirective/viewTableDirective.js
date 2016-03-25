(function(){
	
	'use strict';
	
	angular
    .module('invConnect')
    .directive('viewTableDirective', viewTableDirective);

    function viewTableDirective(){

    	var directive = {
    		restrict :'E',
    		templateUrl :'app/components/viewTableDirective/viewTableDirective.html',
    		scope : {
    			itemsList : '='
    		},
    		link : function($scope,$element, $attrs, $controller){
					    			
    		}
    	}

    	return directive;
    }

})();