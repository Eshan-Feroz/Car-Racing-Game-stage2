var database;
var playerCount;
var canvas, backgroundIMG;
var gameState = 0;
var form, player, game;
var allPlayers;
var distance = 0;

function setup(){
    database = firebase.database();
    canvas = createCanvas(400,400);
    game = new Game();
    game.getState();
    game.start();

    
    
}

function draw(){
    if(playerCount === 4){
        game.update(1);

    }
    if(gameState ===1){
        clear();
        game.play();
    }
}


