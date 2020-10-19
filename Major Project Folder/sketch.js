// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let planeX;
let playerShip; 
let spaceShip;

function setup() {
  createCanvas(800, windowHeight);
}

function draw() {
  background(220);
  createEnemy();
  spaceShip = new Player();

}

function preload(){
  playerShip = loadImage("assets/ship.jpg");
}

class Player {
  constructor(x){
    this.x = x;
    this.y = 0;
  
  }

  move() {
    if (keyIsDown(26)) {
      this.x += 5;
    }
    if (keyIsDown(27)){
      this.x -= 5;

    }

  }

  display() {
    image(playerShip, this.x, 0 + 50, 150, 150);
  }
  



}

function createEnemy(){
  for (let i = 0; i <= 5; i++){
    for (let j = 0; j<=3 ; j++){
      
      square(i*50+50, j*50+50, 25);

      
      
      
    }
  }
}


function 