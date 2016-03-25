(function(){
	
	'use strict';
	
	angular
    .module('invConnect')
    .directive('rangePickerFormatterDirective', rangePickerFormatterDirective);

    function rangePickerFormatterDirective(){
   
    	//todo: use components
    	var directive = {
    		require : 'ngModel',    		
            link : function($scope,$element, $attrs, $controller){            
                 $controller.$parsers.push(function(data) {
                    //convert data from view format to model format
                    return data; //converted
                  });

                  $controller.$formatters.push(function(data) {
                    //convert data from model format to view format
                    // data = data.replace("-","\n").trim();
                    var startEndArray = data.split('-');                  
                    data = startEndArray[0].trim() + "\n" + startEndArray[1].trim();
                    return data; //converted
                  });
                }
    	};

    	return directive;
    }

})();