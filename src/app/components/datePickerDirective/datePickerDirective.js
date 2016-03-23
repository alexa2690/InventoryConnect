(function(){
'use strict';
	
	angular
    .module('invConnect')
    .directive('datePickerDirective', datePickerDirective)
    .directive('datePickerButtonsDirective', datePickerButtonsDirective);

    function datePickerDirective(){
    	var directive = {
    		restrict :'E',
    		templateUrl :'app/components/datePickerDirective/datePickerDirective.html',
    		scope : {
    			datePickerOptions : '=',
                dateFormat:'@',
                currentDate:'='
                // customClassFunc: '&'              
    		},       
            link : linkFunc,
            controller : controllerFunc
            
    	}

    	return directive;


        function linkFunc ($scope,$element, $attrs, $controller){


                $scope.datePickerOptions.customClass = getDayClass;

                $scope.datePickerMode = "day";
                $scope.isWeek = false;

                $scope.popup = {
                    opened : false
                }

                $scope.selectDate = function(dt) {
                 // vm.dt = dt;        
                }

                $scope.currentDate = new Date();

                //scope methods

                $scope.open = function(){
                    $scope.popup.opened = true;
                }

                $scope.selectDate = function(dt) {       
                }

                //helper functions           


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

     
                function getDayClass(data) {

                    var date = data.date,
                    mode = data.mode;
                    var startAndEnd = startAndEndOfWeek($scope.currentDate);

                    var firstday = startAndEnd[0];
                    var lastday = startAndEnd[1];

                    if(firstday <= date && lastday >= date &&  $scope.isWeek){
                        return 'selected-week-td';    
                    }
                    return '';
                  }

        }

        function controllerFunc($scope){
                this.changeMode = function(mode){       
                    if(mode =='week'){
                        // $scope.$apply(function(){
                            // $scope.datePickerOptions.customClass = getDayClass;
                            $scope.datePickerMode = 'year';
                            $scope.datePickerMode = 'day';
                            // $scope.$broadcast('refreshDatepickers');
                            $scope.isWeek = true;
                        // });                        
                        return;
                    }
                    $scope.isWeek = false;
                    $scope.datePickerMode = mode;
                }
        }
    }

    function datePickerButtonsDirective (){

            var directive = {
                restrict: 'E',  
                // replace: true,
                templateUrl :'app/components/datePickerDirective/datePickerButtonsDirective.html',
                require:  '^datePickerDirective',
                link: datePickerButtonsLinkFunc
            };

            return directive;

            function datePickerButtonsLinkFunc ($scope,$element, $attrs, datePickerController) {

                    $scope.onDayClicked = function (){
                        datePickerController.changeMode('day');
                    }

                    $scope.onWeekClicked = function (){
                        datePickerController.changeMode('week');
                    }

                    $scope.onMonthClicked = function (){
                        datePickerController.changeMode('month');
                    }
            }
        }


})();