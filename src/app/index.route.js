(function() {
  'use strict';

  angular
    .module('invConnect')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('requisitions', {
        url: '/',
        templateUrl: 'app/requisitions/viewAll/viewRequisitions.html',
        controller: 'ViewRequisitionsController',
        controllerAs: 'vr'
      })
      .state('templates', {
        url: '/templates',
        templateUrl: 'app/templates/viewAll/viewTemplates.html',
        controller: 'ViewTemplatesController',
        controllerAs: 'vt'
      })
      .state('requisitions.add', {
        url: '/requisition/add',
        templateUrl: 'app/requisitions/add/addRequisition.html',
        controller: 'RequisitionController',
        controllerAs: 'ar'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
