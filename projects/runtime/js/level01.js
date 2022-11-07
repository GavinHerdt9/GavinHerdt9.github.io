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
                { "type": "sawblade", "x": 800, "y": groundY - 20},
                { "type": "sawblade", "x": 1000, "y": groundY - 155},
                { "type": "sawblade", "x": 2200, "y": groundY - 45},
                { "type": "sawblade", "x": 1200, "y": groundY - 30}
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


        function createEnemy (x, y, velX, velY, rot){
            var enemy = game.createGameItem("enemy", 25);
            var redSquare = draw.rect(50, 50, "red");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = velX
            enemy.velocityY = velY
            enemy.rotationalVelocity = rot
            game.addGameItem(enemy);
            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-15)
            };
            enemy.onProjectileCollision = function () {
                game.increaseScore(100);
                enemy.flyTo(x, -20);
            }
        }

        createEnemy(1200, groundY - 40, -2, 0, 2)
        createEnemy(900, groundY - 40, -2, -.05, -.5)

        function createTrophy(x, y){
            var trophy = game.createGameItem("trophy", 25);
            var goldenRectangle = draw.rect(50, 70, "gold");
            goldenRectangle.x = -25;
            goldenRectangle.y = -25;
            trophy.addChild(goldenRectangle);
            trophy.x = x;
            trophy.y = y;
            trophy.velocityX = -2
            game.addGameItem(trophy);
            trophy.onPlayerCollision = function () {
                game.increaseScore(300)
            };
            
        }

        createTrophy(2600, groundY - 40)

        

        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
