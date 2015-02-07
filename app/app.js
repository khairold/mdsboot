'use strict'

var app = angular.module('mdsApp', ['ui.bootstrap']);

app.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 7000;
    var slides = $scope.slides = [];

    slides.push({ "image": "images/carousel/1.png", "text": "More Cats", "active": false });
    slides.push({ "image": "images/carousel/2.png", "text": "Extra Kittys", "active": true });
    slides.push({ "image": "images/carousel/3.png", "text": "Lots of Felines", "active": false });
    slides.push({ "image": "images/carousel/4.png", "text": "Surplus Cutes", "active": false });
});

app.controller('VideoCtrl', function ($scope, $octoshape) {
    var player_id = "player";

    var player_width = 1600;
    var player_height = 900;

    var player_streams = [
        {
            id: 'my_stream',
            stream: 'octoshape://cdnstreams.tm.net.my/tmg/udrive/auto/Aminah',
            eventStart: 1331725805000
        }
    ];
    var player_stream = "my_stream";

    var params = {allowFullScreen: true, scale: 'noscale', allowScriptAccess: 'always'};
    var attributes = {id: player_id, name: player_id};
});

