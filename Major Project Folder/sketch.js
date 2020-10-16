// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let planeX;
let playerShip; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

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
    image(playerShip, this.x, 0 + 50, 150, 150)
  }
  



}

class Enemies {
  constructor(x, y) {


  }
}
  