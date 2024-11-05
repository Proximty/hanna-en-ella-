let screen1 = false//startScreen
let screen2 = true // level selector

let albumCover; //variable for albumb cover conan gray
let heartPotion; //heart potion for conan gray game

let heartPotionX = 50 //x position for the heart potion





function preload(){
  albumCover = loadImage('pixil-frame-conan gray.jpg')
  heartPotion = loadImage('Health potion.png')
}


//aardappel en awooga


function setup() {
  createCanvas(800, 600);
}

function draw() {
  
  
  if(screen1 == true){
    background(0)
    startScreen()
  }else if(screen2 == true){
    background(0)
    levelScreen()
    
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
  

  image(heartPotion, heartPotionX, 420, 100, 100)

  
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

  //x >= 625 && x <= 775
  //y >= 450 && y<= 530



}
//ideas
//I want to make it so that u have to play different obby's in 2d to collect new songs and that when you get the last song you get to attend a concert
//freakyfriday

function keyPressed() {
  if(screen2 == true){
    if (key === 'd' || key === 'D') { // Checks for 'w' or 'W'
      console.log("D")
    }
  }
}
