//user class vars
class Rect {

    constructor (x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

     setX(x)
    {
       this.x = x;
    }
    setY(y)
    {
       this.y = y;
    }
    setH(h)
    {
       this.h = h;
    }
    setW(w)
    {
       this.w = w;
    }
    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
    }
    get theH()
    {
        return this.h;
    }
    get theW()
    {
        return this.w;
    }
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//auto vars
var autonoX = 750;
var autonoY = 50;
var autonoW = 10;
var autonoH = 200;
var autonoSpeed = 5;
//user vars
var x = 50;
var y = 50;
var w = 50;
var h = 10;
var speed = 20;



var sound = document.getElementById("sound");
sound.loop = true;
sound.load();

$(document).ready(function(){
  $(this).keypress(function(event){
    getKey(event);
    sound.play();
  });
});

function getKey(event){
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);

  //user move
  if(actualLetter == "w" || actualLetter == "W"){
    y = y - speed;
  } else if(actualLetter == "s" || actualLetter == "S"){
    y = y + speed;
  } else if(actualLetter == "a" || actualLetter == "A"){
    x = x - speed;
  } else if(actualLetter == "d" || actualLetter == "D"){
    x = x + speed;
  }

}

ctx.fillStyle = "#5edad3";

draw();
setInterval(update, 1000/60);

function update(){
  //auto move
  autonoY = autonoY + autonoSpeed;
  //auto canvas collisions
  if (autonoY >= 600 - autonoH){
    autonoSpeed = -5;
  } else if (autonoY <= 0){
    autonoSpeed = 5;
  }

  //user canvas collisions
  if(y <= 0){
    y = 0;
  } else if (y >= 600 - h){
    y = 600 - h;
  }

  if (x <= 0){
    x = 0;
  } else if (x >= 800 - w){
    x = 800 - w;
  }

  //auto user collisions
  if(((x + w) >= (autonoX)) && (x <= (autonoX + autonoW)) && ((y + h) >= autonoY) && (y <= (autonoY + autonoH))){
    document.body.style.background = "#e975d3";
    autonoH = autonoH - 5;
    h = h + 1;
    speed = speed - 0.015;

    if(autonoH <= 0){
      autonoX = Math.floor(Math.random() * (800 - autonoW));
      autonoH = 200;
    }

    if(h >= 600){
      end();
    }
  } else {
    document.body.style.background= "#222222";
  }
  draw();
}

function end(){
  speed = 10;
  h = 10;
}

function draw(){
  ctx.clearRect(0, 0, 800, 600);
  ctx.fillRect(autonoX, autonoY, autonoW, autonoH);
  ctx.fillRect(x, y, w, h);
}