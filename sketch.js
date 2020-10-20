// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let score = 0;
let lives = 3;
let player = {
  x: 400,
  y: 700,
  width: 60,
  dx: 4,

}

function preload(){
  spaceBackground = loadImage("assets/space.jpg");
}

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background("black");
  createEnemy();
  displayUI();
  displayPlayer();
  playerMovement();
}


function displayUI() {
  fill(255,255,255);
  stroke(50,150,50)
  strokeWeight(8);
  textSize(30);
  textAlign("LEFT");
  text("SCORE : " + score, 20, 45);
  textAlign("RIGHT");
  text("LIVES : " + lives , 600, 45);

}


function displayPlayer(){
  fill(80,255,75);
  noStroke();
  rectMode(CENTER);
  rect(player.x, player.y, player.width, 30);
  // rect(player.x, player.y-15, 15, 30);


  
}

function createEnemy(){
  for (let i = 0; i <= 5; i++){
    for (let j = 0; j<=3 ; j++){
      
      square(i*50+50, j*50+77, 25);

      
      
      
    }
  }
}



function playerMovement(){
  if (keyIsDown(LEFT_ARROW)){
    player.x  -= player.speed;

  }
  
  else if (keyIsDown(RIGHT_ARROW)){
    player.x += player.speed;

  }
  if (player.x-player.width/2< 0){
    player.x = player.width/2;
  }
  else if (player.s + player.width/2 > width){
    player.x = width - player.width/2;
  }
}
