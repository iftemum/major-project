// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spaceBackground;
let alienImage;
let score = 0;
let lives = 3;
let stage = 0;
let edge = false; 
let player = {
  x: 400,
  y: 650,
  width: 50,
  dx: 7,
};

let bulletArray = [];

let alienArray = [];


function preload(){
  alienImage = loadImage("assets/alien.png");
}

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i<12; i++){
    for(let j= 0; j<3; j++){
      alienArray.push(new Enemy(i*50+50,j*60+80));
    }
  }

}


function draw(){
  
  if(stage===0){
    openingScreen();


  }
  
  if(stage ===1){
    game();

  }
  
  if(mouseIsPressed===true){
    stage = 1;
  }
}

function game() {
  background("black");
  displayUI();
  displayPlayer();
  playerMovement();
  for(let i = 0; i<alienArray.length; i++){
    alienArray[i].display();
    alienArray[i].move();
    
  }
  if (edge === true){
    for(let i = 0; i<alienArray.length; i++){
      alienArray[i].shiftDown();

  }
}

  for (let i = 0; i<bulletArray.length; i++){
      
    bulletArray[i].move();
    bulletArray[i].display();

  }  
}

function openingScreen(){
  background("black");
  fill("green");
  textSize(70);
  text("SPACE WARS", 200, 100);
  textSize(15);
  text("Programmed by Iftemum Al Raian 2020", 230, 130);

  textSize(40);
  text("How To Play", 200, 250);
  textSize(15);
  text(">PRESS LEFT AND RIGHT ARROWS TO MOVE", 230, 290);
  text(">PRESS SPACE TO KILL THE ALIENS", 230, 320);
  textSize(30);
  text("CLICK THE SCREEN TO START",200,450);



}




function keyPressed(){
  if(key === " "){
    bulletArray.push(new Bullet(player.x ,player.y));
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

class Bullet {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.diameter = 8;
    this.dy = -7;
  }
  move() {
    this.y += this.dy;
  }

  display(){
    fill("orange");
    noStroke();
    circle(this.x, this.y, this.diameter);
  }

}


class Enemy {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.radius = 17;
    this.fillColor = "red"
    this.dx = 1;
    }
    



  display(){
    fill(this.fillColor)
    circle(this.x, this.y, this.radius*2);

  }

  move() {

    this.x += this.dx;

    if(this.x <=0 + this.radius || this.x >= width - this.radius){
      edge = true;

    }


  }

  shiftDown(){
    this.y += 5;
    this.dx *= -1;
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


