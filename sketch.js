// Major Project - Space Wars
// Iftemum Al Raian - Computer Science 30
// 10/27/2020

// Declaring all the global variables as needed
let spaceBackground;
let alienImage;
let shipImage;
let score = 0;
let lives = 3;
let stage = 0;

// making a player object so that it's properties can be used multiple times
let player = {
  x: 400,
  y: 505,
  width: 70,
  dx: 7,
};

// bullet array to store every bullet that is shot
let bulletArray = [];

// alien array to store the aliens
let alienArray = [];


// loading multimedia
function preload(){
  spaceBackground = loadImage("assets/space (2).jpg")
  alienImage = loadImage("assets/alien.png");
  shipImage = loadImage("assets/ship.png");
}

function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);

  // a grid of total 90 aliens are pushed into the alienArray 

  for (let i = 0; i<15; i++){
    for(let j= 0; j<6; j++){
      alienArray.push(new Enemy(i*50+50,j*50+60));
    }
  }

}

// Different screens appear as needed
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

  if(score === 90){
    winningScreen();


  }
}

// This is the main game function 
function game() {
  background();
  displayUI();
  displayPlayer();
  playerMovement();
  aliens();
  bullets();
  checkCollision();

}

function bullets(){
  for (let i = 0; i<bulletArray.length; i++){
      
    bulletArray[i].move();
    bulletArray[i].display();
    for(let j = 0; j<alienArray.length; j++){
      if (bulletArray[i].hits(alienArray[j])){
        bulletArray[i].delete();
        alienArray[j].die();
      }
    }


  }

  
  for (let i = bulletArray.length-1; i>=0; i--){
    if(bulletArray[i].toDelete){
      bulletArray.splice(i, 1);
      score++
    }
  }
  

}

function aliens(){
  for(let i = 0; i<alienArray.length; i++){
    alienArray[i].display();
    alienArray[i].move();

    if (alienArray[i].edge) {
      alienArray[i].shiftDown();
      alienArray[i].move();
    }   
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
  text("SCORE : " + score, 20, 30);
  
}

function winningScreen(){
  background("green");
  fill("")
}


function displayPlayer(){
  fill("green");
  noStroke();
  image(shipImage, player.x, player.y, player.width, player.width);
}




class Bullet {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.diameter = 8;
    this.dy = -7;
    this.toDelete = false;

  }
  move() {
    this.y += this.dy;
  }

  display(){
    fill("orange");
    noStroke();
    circle(this.x, this.y, this.diameter);
  }

  delete(){
    this.toDelete = true; 
  }

  hits(enemies){
    let d = dist(this.x, this.y, enemies.x, enemies.y);
    if (d< this.diameter/2 + enemies.size/2 ){
      return true;
    }
    else {
      return false;
    }

  }

}


class Enemy {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 30;
    this.fillColor = "red";
    this.dx = 4;
    this.edge = false;

  }


  display(){
    fill(this.fillColor);
    image(alienImage, this.x, this.y, this.size, this.size);

  }

  move() {

    this.x += this.dx;

    if(this.x <=0 + this.size/2 || this.x >= width - this.size/2){
      this.edge = true;
    }
    else {
      this.edge = false;
    }


  }

  die(){
    this.x = 100000;
  }

  shiftDown(){
    this.y += 25;
    this.dx *= -1.12;
  }

}

function checkCollision(){
  let d = dist(player.x, player.y, Enemy.x, Enemy.y);
  for (let i = 0; i<alienArray.length;i++){
    if (d<player.width/2+alienArray[i].size/2){
      stage =2;
    }

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












