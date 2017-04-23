(function () {
    'use strict';
    angular.module('music-search', [
        'ui.router',
        'spotify',
        'musicSearch'
    ])
        .config(['$urlRouterProvider', function ($urlRouterProvider) {
            $urlRouterProvider.otherwise(function ($injector) {
                var $state = $injector.get('$state');
                $state.go('music');
            });
        }]);
})();