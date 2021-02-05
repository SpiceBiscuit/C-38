var database;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var form, game, player;

var car1, car2, car3, car4;
var cars;

function setup(){
    createCanvas(displayWidth - 20, displayHeight-20);
    
    database = firebase.database();


    // location for reading or writing --------.ref()
    // reads data from the database--------------.on()
    //writes data into the database------------   .set()
    game = new Game();
    game.getState();
    game.start();
   

}



function draw(){
    background("white");

    if (playerCount === 4){
        game.update(1);
    }

    if (gameState === 1){
        clear();
        game.play();
    }
}
