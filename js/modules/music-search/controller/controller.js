(function () {
    'use strict';

    angular.module('musicSearch')
        .controller('MusicCtrl', ['$state', 'Spotify', '$q', function ($state, Spotify, $q) {

            var self = this;
            self.showResults = false;

            self.searchNow = function (data) {
                self.allResults = [];
                self.promise = $q.all([
                    Spotify.search(data, 'artist'),
                    Spotify.search(data, 'album')])
                    .then(function (response) {
                        self.allResults = response[0].data.artists.items.concat(response[1].data.albums.items);
                        self.showResults = true;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            };

            self.getDetails = function (data) {
                if(data.type === 'artist'){
                    console.log(data);
                    if(data.images[0].url) {
                        self.selected = {
                            name: data.name,
                            imageUrl: data.images[0].url
                        };
                    }
                    else {
                        self.selected = {
                            name: data.name,
                            imageUrl: 'http://1.bp.blogspot.com/-Zr0pmj1bLnM/Uhh7kROhGYI/AAAAAAAAGkE/W51xFS75-Ec/s1600/no-thumbnail.png'
                        };
                    }
                    Spotify.getArtistAlbums(data.id)
                        .then(function (response) {
                            console.log(response);
                            self.tracksInAlbums = response.data.items;
                            angular.element('.details-modal').css('display', 'block');
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                }
                else {
                    Spotify.getAlbumTracks(data.id)
                        .then(function (response) {
                            self.tracksInAlbums = response.data.items;
                            angular.element('.details-modal').css('display', 'block');
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                }
            };

            self.closeModal = function () {
                self.tracksInAlbums = [];
                angular.element('.details-modal').css('display', 'none');
            };
        }
        ]);
})();