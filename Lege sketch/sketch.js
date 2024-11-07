let screen1 = false//startScreen
let screen2 = false// level selector

let albumCover; //variable for albumb cover conan gray
let heartPotion; //heart potion for conan gray game

let heartPotionX = 50 //x position for the heart potion
let heartPotionY = 300

let timerForGameC1 = 0
    

let level1Conan = true

let timer = 0
let nextArrow = 0


let perfect = 0
let great = 0
let good = 0
let ok = 0
let missCounter = -1  // begint op -1 zodat als je op het scherm komt van het eerste conan gray spel dat je niet al met 1 miss begint

let conanGame1 = true
let conanGame1ScoreBoard = false

//arows
let arrowUp;
let arrowDown;
let arrowLeft;
let arrowRight;

let selectEasyArrows;

let timerIncremented = false; // zorgt ervoor dat als er geen pijlen worden gedrukt binnen de 5 seconden dat misses maar 1 meer word inplaats van hoeveel je framerate is

let moviesConanGray;




function preload(){
  //images 
  //indie pop 
  //cocan gray  
  albumCover = loadImage('pixil-frame-conan gray.jpg')
  heartPotion = loadImage('Health potion.png')
  albumCoverPixelArt = loadImage('pixil-frame-0.png')

  arrowUp = loadImage("arrow up.png")
  arrowDown = loadImage("arrow down.png")
  arrowLeft = loadImage("arrow left.png")
  arrowRight = loadImage("arrow right.png")
  // next artist 
  //songs
  // conan gray 
  moviesConanGray = loadSound("Conan_Gray_-_Movies.mp3")
  // next arist
}


//aardappel en awooga


function setup() {
  createCanvas(800, 600);
  //moviesConanGray.play()
  
}

function draw() {
  
  
  timerForGameC1 += deltaTime/ 1000
  timer += (deltaTime/1000);
  
  if(screen1 == true){
    background(0)
    startScreen()
  }else if(screen2 == true){
    background(0)
    levelScreen()
    
  }
  else if(level1Conan == true){
    LevelscreenCG1()
  }
  else{
    background(220);
  }


  
  
}

function startScreen(){
  //here I want to play Movies, Conan gray
  //do this while the startScreen is true aka screen 1


  //draw the albumb cover on the screen
  strokeWeight(1)
  image(albumCover, 200, 100, 400, 400)
  stroke(255, 0, 0)
  fill(255)
  textSize(40)
  text("♡~ꜱᴜᴘᴇʀᴀᴄʜᴇ~♡", 250, 100)

  //draw button
  text("ꜱᴛᴀʀᴛ", 650, 500)
  strokeWeight(0.7)
  fill(255, 255, 255, 0)
  rect(625, 450, 150, 80)

}

function levelScreen(){
  textSize(40)
  stroke(255, 0 ,0)
  fill(255)
  text("ᴄᴏᴍᴘʟᴇᴛᴇ ʟᴇᴠᴇʟꜱ ᴛᴏ ɢᴇᴛ ɴᴇᴡ ꜱᴏɴɢꜱ", 80, 50)

  stroke(255)
  fill(255, 70, 70, 200)
  for(let i = 0; i <5; i++){
    rect(50+ i * 150, 300, 100, 100, 5)
  }
  
  fill(255)
  textSize(15)
  for(let i = 0; i < 4; i++){

    text("O", 95 + i* 150, 420)
    for(let j = 0; j <15; j++){
      text(".", 110+ (i * 150)+(10 *j), 420 )
    }
    
  }
  text("O", 695,420 )
  

  image(heartPotion, heartPotionX, heartPotionY, 100, 100)

  
}
function LevelscreenCG1(){
  background(0)
  image (albumCoverPixelArt,70,-25)  
  fill(255, 70, 70, 200)
  rect(0, 550, 800, 50)
  image (albumCoverPixelArt,0,)  

  //draw button
  if(conanGame1 == false && conanGame1ScoreBoard == false){
    textSize(40)
    fill(255, 0, 0)
    text("ᴇᴀꜱʏ", 660, 500)
    strokeWeight(0.7)
    fill(255, 0, 0, 50)
    stroke("white")
    rect(625, 450, 150, 80)
  }


  if(conanGame1 == true){
    if(moviesConanGray.isPlaying()){

    }else{
      moviesConanGray.play()
    }
  }else{
    moviesConanGray.pause()
  }


  if(conanGame1 == true){
    
    if(conanGame1ScoreBoard == true){
      text("score board for easy game 1 goed here", 50, 50)
    }
    if(timerForGameC1>= 77){
      conanGame1 = false
      conanGame1ScoreBoard = true

    }
    console.log(timerForGameC1)
    stroke(255)
    if(timer>= 5 || nextArrow >= 1 ){
      if(nextArrow === 2){
        missCounter ++
      }

      
      timer = 0
      nextArrow = 0
      // console.log(timer)
      timerIncremented = false; // Reset the flag when starting a new cycle
      selectEasyArrows = round(random(3))
     }
     
     //arrow left
      if(selectEasyArrows == 0){
        fill(0, 0, 139, 200)
        rect(80, 150, 40, 200 - 40 * timer)
      }
      if(selectEasyArrows == 1){
        fill(0, 0, 139, 200)
        //arrow down
        rect(280, 150, 40, 200 - 40 * timer)
      }
      if(selectEasyArrows == 2){
        fill(0, 0, 139, 200)
        //arrow up
        rect(480, 150, 40, 200 - 40 * timer)
      }
      if(selectEasyArrows == 3){
        fill(0, 0, 139, 200)
        //arrow right
        rect(670, 150, 40, 200 - 40 * timer)
      }

      image(arrowDown, 200, 20, 200, 200,)
      image(arrowLeft, 0, 15, 200, 200,)
      image(arrowUp, 400, 0, 200, 200,)
      image(arrowRight, 600, 15, 200, 200,) 

      textSize(30)
      stroke(255, 0, 0)
      fill(255)
      if(missCounter < 0){
        text("ᴍɪꜱꜱ : 0" , 645, 520)
      }else{
        text("ᴍɪꜱꜱ : " + missCounter, 645, 520)
      }
      text("ᴏᴋ     : " + ok, 645, 480 )
      text("ɢᴏᴏᴅ : " + good, 645, 440)
      text("ɢʀᴇᴀᴛ: " + great, 645, 400)
      text("ᴘᴇʀꜰᴇᴄᴛ : " + perfect, 609, 360)
      // Check if the timer is in the range for incrementing
      if (timer > 4.9 && timer < 5 && !timerIncremented) {
      missCounter += 1;
      timerIncremented = true; // Set the flag to prevent further increments in the same range
    }
      // text(214 - round(timerForGameC1) + " ", 20, 20)
      text(floor((78-round(timerForGameC1))/60),20, 20)
      text(": ", 40, 20)
      // if(timerForGameC1 <34){
      //   text((214-round(timerForGameC1)) - 180, 50, 20)
      // }else if(timerForGameC1 <93){
      //   text((214-round(timerForGameC1)) - 120, 50, 20)
      //}
      if(timerForGameC1 <18.5  ){
        text((78-round(timerForGameC1)) - 60, 50, 20)
      }else{
        text((78-round(timerForGameC1)), 50, 20)

      }
      
      }
      //180 3 min
      //120 2 min
      //60 1 min

      
    }
    
  

  
function LevelscreenCG2(){
  
}
function LevelscreenCG4(){
  
}
function LevelscreenCG5(){
  
}

function mousePressed(){
  let x = mouseX
  let y = mouseY

  //start button
  if(screen1 == true){
    if(x >= 625 && x <= 775 && y >= 450 && y <= 530){
      screen1 = false
      screen2 = true
    }
  }
  if(level1Conan == true){
    if(x >= 625 && x <= 775 && y >= 450 && y <= 530){
      timerForGameC1 = 0
      conanGame1 = true

    }

  }

  //x >= 625 && x <= 775
  //y >= 450 && y<= 530



}
//ideas
//I want to make it so that u have to play different obby's in 2d to collect new songs and that when you get the last song you get to attend a concert
//freakyfriday

function keyPressed() {
  if(screen2 == true){

    if(heartPotionX < 601)
    if (key === 'd' || key === 'D') { // Checks for 'w' or 'W'
     heartPotionX +=150
    }

    if(heartPotionX >50){
    if(key === "a"|| key === "A"){
      heartPotionX -= 150
    }
  }
  }
  if(heartPotionX == 50){
    
    if (keyCode === ENTER) {
      screen2 = false
      level1Conan = true
    }
  }
  if(conanGame1 == true)
    if (  
      (selectEasyArrows === 2 && keyCode === UP_ARROW) ||
      (selectEasyArrows === 1 && keyCode === DOWN_ARROW) ||
    (selectEasyArrows === 0 && keyCode === LEFT_ARROW) ||
    (selectEasyArrows === 3 && keyCode === RIGHT_ARROW) 
    ){  
      if(timer < 1){
        perfect += 1
      }else if(timer <2){
        great += 1
      }
      else if(timer <3){
        good += 1
      }else if(timer < 5){
        ok += 1
      }
      nextArrow = 1
    }
   
    if (  
      (selectEasyArrows === 2 && keyCode != UP_ARROW) ||
      (selectEasyArrows === 1 && keyCode != DOWN_ARROW) ||
      (selectEasyArrows === 0 && keyCode != LEFT_ARROW) ||
      (selectEasyArrows === 3 && keyCode != RIGHT_ARROW) 
    )     {  nextArrow = 2}
    
  

}

