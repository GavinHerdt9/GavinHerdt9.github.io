var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "barrel", "x": 400, "y": groundY },
                { "type": "barrel", "x": 600, "y": groundY },
                { "type": "barrel", "x": 900, "y": groundY }
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 20;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap("img/sawblade.png");
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25
            obstacleImage.y = -25
        }

        function createBarrel(x, y) {
            var barrelHitZoneSize = 25;
            var damageFromBarrel = 10;
            var barrelHitZone = game.createObstacle(barrelHitZoneSize, damageFromBarrel);
            barrelHitZone.x = x;
            barrelHitZone.y = y;
            game.addGameItem(barrelHitZone);
            var barrelImage = draw.bitmap("img/sawblade.png");
            barrelHitZone.addChild(barrelImage);
            barrelImage.x = -25
            barrelImage.y = -25
        }

        createSawBlade(800, groundY - 20)
        createSawBlade(1600, groundY - 155)
        createSawBlade(2200, groundY - 45)
        createSawBlade(1200, groundY - 30)

        createBarrel(1000, groundY - 20)
        createBarrel(2000, groundY - 20)
        createBarrel(2400, groundY - 20)
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
