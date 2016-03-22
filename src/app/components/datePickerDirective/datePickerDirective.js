(function(){
'use strict';
	
	angular
    .module('invConnect')
    .directive('datePickerDirective', datePickerDirective);

    function editTableDirective(){
    	var directive = {
    		restrict :'E',
    		templateUrl :'app/components/datePickerDirective/datePickerDirective.html',
    		scope : {
    			datePickerOptions : '=',
                dateFormat:'@',                
    		},
    	 	link: function($scope,$element, $attrs, $controller){
    	 		///current work hint :angular.module('ui.bootstrap.isClass', [])
                //properties
                $scope.popup = {
                    opened:false
                }

                //scope methods

                $scope.open = function(){
                    $scope.popup.opened = true;
                }

                $scope.selectDate = function(dt) {       
                }

                //helper methods

                function startAndEndOfWeek(date) {
                  // If no date object supplied, use current date
                  // Copy date so don't modify supplied date
                  var now = date? new Date(date) : new Date();

                  // set time to some convenient value
                  now.setHours(0,0,0,0);

                  // Get the previous Monday
                  var monday = new Date(now);
                  monday.setDate(monday.getDate() - monday.getDay());

                  // Get next Sunday
                  var sunday = new Date(now);
                  sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

                  // Return array of date objects
                  return [monday, sunday];
                }

    	 	}
    	}

    	return directive;
    }
})();