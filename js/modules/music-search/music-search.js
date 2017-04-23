(function () {
    'use strict';
    angular.module('musicSearch', [])
        .config(['$stateProvider',function ($stateProvider) {
            var music = {
                name: 'music',
                title: 'Music Search',
                url: '/music-search',
                templateUrl: 'js/modules/music-search/views/view.html',
                controllerAs : 'music',
                controller: 'MusicCtrl'
            };
            $stateProvider.state(music);
        }]);
})();