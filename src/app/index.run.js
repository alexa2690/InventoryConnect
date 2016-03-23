(function() {
  'use strict';

  angular
    .module('invConnect')
  //   .run(runBlock);

  // /** @ngInject */
  // function runBlock($log) {

  //   $log.debug('runBlock end');
  // }


  .run(["$templateCache", function($templateCache) {
    $templateCache.put("uib/template/datepicker/popup.html",
    "<div>\n" +
    "  <ul class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
    "    <li ng-transclude></li>\n" +
    "    <li ng-if=\"showButtonBar\" >\n" +
    "      <date-picker-buttons-directive > </date-picker-buttons-directive>" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);

})();
