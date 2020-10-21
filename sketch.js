// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spaceBackground;
let alien;
let score = 0;
let lives = 3;
let raian;

let player = {
  x: 200,
  y: 520,
  width: 50,
  dx: 7,
};

let bullets = {
  x : player.x,
  y : player.y,
  width : 7,
  height : 15,
  dy : 5,
  state : 0,
  fire : false,

  
};

function preload(){
  spaceBackground = loadImage("assets/space.jpg");
  alien = loadImage("assets/alien.png");
}

function setup() {
  createCanvas(800, 800);
  raian = new Enemy(100, 100);

}

function draw() {
  background("black");
  displayUI();
  displayBullets();
  displayPlayer();
  playerMovement();
  raian.move();
  raian.display();
  
}


function displayBullets() {
  fill("yellow");
  rect(bullets.x, bullets.y, bullets.width, bullets.height);

  if (bullets.fire == true && bullets.state== 0){
    bullets.state = 1;
  }

  if (bullets.state == 1){
    bullets.x = bullets.x;
    bullets.y = bullets.y-bullets.speed;
    if (bullets.y <= 0){
      bullets.state = 2;
    }

  }
  
  if (bullets.position == 2){
    bullets.y = player.y;
    bullets.x = player.x;
    bullets.state = 0;
  }
  else{
    bullets.y = player.y;
    bullets.x = player.x;
  }



}

function displayUI() {
  fill(255,255,255);
  stroke(50,150,50);
  strokeWeight(4);
  textSize(30);
  textAlign("LEFT");
  text("SCORE : " + score, 20, 45);
  textAlign("RIGHT");
  text("LIVES : " + lives , 600, 45);
  
}


function displayPlayer(){
  fill("green");
  noStroke();
  rectMode(CENTER);
  rect(player.x, player.y, player.width, 20);
  rect(player.x, player.y-15, 15, 30);
  

  
  
}

class Enemy {
  constructor(x, y){
    this.x = x;
    this.y = y; 
    
  }

  move(){
    for(let i = 0; i<width; i++){
      this.x += 3;
    }
    if (this.x>width-player.width){
      this.y += 10;
    }


  }

  display(){
    image(alien, this.x, this.y, 50, 50);

  }


}



function playerMovement(){
  if (keyIsDown(LEFT_ARROW)){
    player.x  -= player.dx;

  }
  
  else if (keyIsDown(RIGHT_ARROW)){
    player.x += player.dx;

  }
  if (player.x-player.width/2< 0){
    player.x = player.width/2;
  }
  else if (player.x + player.width/2 > width){
    player.x = width - player.width/2;
  }
}

function keyTyped(){
  if(key == "s" && keyIsPressed){
    fire= true;
  }
  else{
    fire = false;
  }

}