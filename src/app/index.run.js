(function() {
  'use strict';

  angular
    .module('invConnect')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
