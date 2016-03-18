(function() {
  'use strict';

  angular
    .module('invConnect')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('requisitions', {
        url: '/requisition',
        templateUrl: 'app/requisitions/requisition.main.html',
        controller: 'RequisitionsController',
        controllerAs: 'mainReqCtrl'
      })
      .state('requisitions.all', {
        url: '/all',
        templateUrl: 'app/requisitions/viewAll/viewRequisitions.html',
        controller: 'ViewRequisitionsController',
        controllerAs: 'allReqCtrl'
      })
      .state('requisitions.add', {
        url: '/add',
        templateUrl: 'app/requisitions/add/addRequisition.html',
        controller: 'AddRequisitionController',
        controllerAs: 'addReqCtrl'
      })
      // .state('requisitions.add', {
      //   url: '/add',
      //   templateUrl: 'app/requisitions/add/addRequisition.html',
      //   controller: 'RequisitionController',
      //   controllerAs: 'ar'
      // })

      .state('templates', {
        url: '/templates',
        templateUrl: 'app/templates/viewAll/viewTemplates.html',
        controller: 'ViewTemplatesController',
        controllerAs: 'vt'
      });

    $urlRouterProvider.otherwise('/requisition/all');
  }

})();
