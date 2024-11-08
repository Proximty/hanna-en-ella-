let screen1 = true//startScreen
let screen2 = false// level selector

let albumCover; //variable for albumb cover conan gray
let heartPotion; //heart potion for conan gray game

let heartPotionX = 50 //x position for the heart potion
let heartPotionY = 300

let timerForGameC1 = 0
    

let level1Conan = false

let timer = 0
let nextArrow = 0


let perfect = 0
let great = 0
let good = 0
let ok = 0
let missCounter = -1  // begint op -1 zodat als je op het scherm komt van het eerste conan gray spel dat je niet al met 1 miss begint

let conanGame1 = false
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
  



  if(conanGame1 == false && conanGame1ScoreBoard == false){
    image(arrowLeft, 0, 0, 100, 100)
    
    if(mouseX >= 745 && mouseX <= 795 && mouseY <= 50){
    fill(255, 165, 0, 170)
    rect(580,0, 250 )
    fill(255)
    text("how to play:", 600, 50)
    text("When playing press", 600, 90)
    text("the arrow keys at the", 600, 110)
    text("last possible moment.", 600, 130)

    text("But be shure not to", 600, 170)
    text("miss them!", 600, 190)
    }

    //info button
    fill("orange")
    circle(770, 25, 30)
    fill(255)
    text("i", 768, 30)


    textSize(40)
    fill(255, 0, 0)
    text("ᴇᴀꜱʏ", 660, 500)
    strokeWeight(0.7)
    fill(255, 0, 0, 50)
    stroke("white")
    rect(625, 450, 150, 80)


    textSize(40)
    fill("orange")
    text("ɴᴏʀᴍᴀʟ", 325, 500)
    strokeWeight(0.7)
    fill(255, 0, 0, 50)
    stroke("white")
    fill(255, 165, 0, 100)
    rect(315, 450, 150, 80)

    textSize(40)
    fill("green")
    text("ʜᴀʀᴅ",50, 500)
    strokeWeight(0.7)
    fill(255, 0, 0, 50)
    stroke("white")
    fill(0, 128, 0, 50)
    rect(20, 450, 150, 80)

    for(let i = 0; i < 2; i++){
      textSize(20)
      fill(255)
      text("coming soon", 40 + 295 * i , 440 )
    }
    

  }


  if(conanGame1 == true){
    if(moviesConanGray.isPlaying()){

    }else{
      moviesConanGray.play()
    }
  }else{
    moviesConanGray.pause()
  }

  if(conanGame1ScoreBoard == true){
    image(arrowLeft, 0, 0, 100, 100)
    fill(255)
    if(missCounter >= 10){
      text("ʏᴏᴜ ᴅɪᴅ ᴛʀᴀɢɪᴄʟʏ...", 250, 50)
    }else(
      text("ᴜ ᴅɪᴅ ᴡᴇʟʟ!",300, 50)
    )
    text("ᴍɪꜱꜱ : " + missCounter, 300, 260)//520
    text("ᴏᴋ     : " + ok, 300, 220 )
    text("ɢᴏᴏᴅ : " + good, 300, 180)
    text("ɢʀᴇᴀᴛ: " + great, 300, 140)
    text("ᴘᴇʀꜰᴇᴄᴛ : " + perfect, 290, 100)
  }

  if(conanGame1 == true){
    
    if(timerForGameC1>= 77){
      
      conanGame1ScoreBoard = true
      conanGame1 = false

    }
    //console.log(timerForGameC1)
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
      text("ᴏᴋ     : " + ok, 645, 480)
      text("ɢᴏᴏᴅ : " + good, 645, 440)
      text("ɢʀᴇᴀᴛ: " + great, 645, 400)
      text("ᴘᴇʀꜰᴇᴄᴛ : " + perfect, 609, 360)
      // Check if the timer is in the range for incrementing
      if (timer > 4.9 && timer < 5 && !timerIncremented) {
      missCounter += 1;
      timerIncremented = true; // Set the flag to prevent further increments in the same range
    }
      text(floor((78-round(timerForGameC1))/60),20, 20)

      if(timerForGameC1 <18.5  ){
        text((78-round(timerForGameC1)) - 60, 50, 20)
      }else{
        if((78 - round(timerForGameC1)) < 10 ){
          text("0" + (78-round(timerForGameC1)), 50, 20)
        }else{
        text((78-round(timerForGameC1)), 50, 20)
        }

      }
      }

      
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
  
    if(x >= 25 && x <= 85 && y >= 20 && y <= 80){
      if(conanGame1ScoreBoard == true){
        missCounter = -1
        ok = 0
        good = 0
        great = 0
        perfect = 0
        conanGame1ScoreBoard = false
      }
      if(conanGame1ScoreBoard == false && conanGame1 == false && level1Conan == true){
        console.log("yo")
        screen2 = true
        
      }
      
    }
  

}


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
        ok ++
      }else if(timer <2){
        good ++
      }
      else if(timer <3){
        great ++
      }else if(timer < 5){
        perfect ++
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

