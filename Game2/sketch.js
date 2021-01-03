//Press "space" to move to the second city
//Press "v" to move to the third city

var gamestate=1;
var game=0;
var s1=0;
function preload(){
    img1=loadImage("i/2182.jpg") 
    img2=loadImage("i/Page1_1.png") 
    img3=loadImage("i/320b14f35c23c6109bb6e06cafdb644e.jpg")
    img4=loadImage("i/60d752761cb8aa72811e1e9a8e6af706.jpg")
    img5=loadImage("i/3a57e16f320bbcadedb4d4744299466e.jpg")
    img18=loadImage("i/riverbank_by_allrichart_dcjzffw-350t.jpg")
    img6=loadImage("i/4ad36d0546af9cc91645a84b46366687.jpg")
    img7=loadImage("i/fatecraft_port_town_by_tyleredlinart_d6kzrmg-350t.jpg")
    img8=loadImage("i/e9818caf96b27dcc8f169c619b20c919.jpg")
    img9=loadImage("i/UN13VKD.jpg")
    img10=loadImage("i/53874a84e359a625348a355f19db1f2c.jpg")
    img11=loadImage("i/5d42e33de567ee9ba4dd4837ecb08966.jpg")
    img12=loadImage("i/8ae5f828ba36a0dad0084d2aa796e399.jpg")
    img13=loadImage("i/e4cb6a37d7ecc55a3a35c15bc8bcfcdc.jpg")
    img14=loadImage("i/3744f34ca343b53b2b00e1d8b62c41be.jpg")
    img15=loadImage("i/7d5ec8420bccbad1ece6efec15e32df8.jpg")
    img16=loadImage("i/7cc9fd997392378c89613e983aa1361a.jpg")
    img17=loadImage("i/164706c5a3919751a0d322b6ca461664.jpg")
    img19=loadImage("i/9f5c60ebaf7a9e9a85acb1975554bf28.jpg")
    img20=loadImage("i/oleh-yolchiiev-15.jpg")
    img21=loadImage("i/8ae5f828ba36a0dad0084d2aa796e399.jpg")
    img22=loadImage("i/9c66beb0abcaedd054e2de1253c4e2ea.jpg")
    img23=loadImage("i/istockphoto-607477044-612x612.jpg")
    img24=loadImage("i/a0d88cab70c6d58bc8a1262d0d263dc4.jpg")
    img25=loadImage("i/omiro-mironishin-028-secret-room-all-copy-by-omiro-d81b1er.jpg")
    img26=loadImage("i/32254bdb72b2477224edbcfd2e6228d7.jpg")

  npc1img=loadImage("i/bfc-nobleman_230c3aecea.png")
  npc2img=loadImage("i/a4de0490f550ed08181151689f9bf967.png")
  npc3img=loadImage("i/aa0face0b228dd5b32da242bf45c0d4d.png")
  npc4img=loadImage("i/110f99ddead71907ab31184de4a086f8.png")
  npc5img=loadImage("i/d10c27bd5175aac46438aa057b28dbc5.png")
  npc6img=loadImage("i/c6b191ae318c22457c115fa04198c675.png")
  npc7img=loadImage("i/3ecdbd4f139284b95a4c934fca2ec4ff.png")
  npc8img=loadImage("i/a2fe4d56021defc825d8fa8f7ccd1409.png")
  npc9img=loadImage("i/156308389c949d222483b332efbbde10.png")
  npc10img=loadImage("i/11ba35d1d49cc396c406bbd83c4cdbb8.png")
  npc11img=loadImage("i/674fed97d54b00b37ac1bd35eb75c545.png")
  npc12img=loadImage("i/9167309c9b0bc5fc3750339e38aaff80.png")
  npc13img=loadImage("i/72306647b27e8c681990e47b0f26add8.png")
  npc14img=loadImage("i/156308389c949d222483b332efbbde10.png")
 npc15img=loadImage("i/a2fe4d56021defc825d8fa8f7ccd1409.png")
  npc16img=loadImage("i/b33245e17e91019e2d4c20a57afdadbc.png")
  npc17img=loadImage("i/be71bfbdb9a3b2f8f1f1d1ebd7e4e395.png")
  npc18img=loadImage("i/e21837d3c588d2dc3861476b33bb761c.png")
  npc19img=loadImage("i/ec97299070d23aadbdcd9368f1f53b75.png")
  npc20img=loadImage("i/a839f6e79b8a303c06f6010012b9d08b.png")
    npc21img=loadImage("i/edf16488d6f03dc8fd205b70d606e316.png")
    npc22img=loadImage("i/99abbd24788155ddb9701233b902fd23.png")
    npc23img=loadImage("i/e40b4054b8251370f3cd28606f508f73.png")
    
    mcimg=loadImage("i/c791f4e74e64ffde29cf58c8d51a8526.png")

    boatimg=loadImage("i/purepng.com-wooden-boatboatwatercraftfloatplanesmall-vesselinflatable-1701528448779opeug.png")
    doorimg=loadImage("i/rzlq58_large.png")
    bookimg=loadImage("i/learn-4759967_1280.webp")
    pillarimg=loadImage("i/74fc6e5be002a9424c3e205dd6131bbb (1).png")
}
function setup(){
    createCanvas(700, 500);

    bg=createSprite(350,250,800,800)
    bg.addImage("bg4",img4)
     bg.addImage("bg",img1)
     bg.addImage("bg2",img2)
     bg.addImage("bg3",img3)
     bg.addImage("bg5",img5)
     bg.addImage("bg6",img6)
     bg.addImage("bg8",img8)
     bg.addImage("bg7",img7)
     bg.addImage("bg18",img18)
     bg.addImage("bg9",img9)
     bg.addImage("bg10",img10)
     bg.addImage("bg11",img11)
     bg.addImage("bg12",img12)
     bg.addImage("bg13",img13)
   //  bg.addImage("bg14",img14)
     bg.addImage("bg15",img15)
     bg.addImage("bg16",img16)
     bg.addImage("bg17",img17)
     bg.addImage("bg19",img19)
     bg.addImage("bg20",img20)
     bg.addImage("bg21",img21)
     bg.addImage("bg22",img22)
     bg.addImage("bg23",img23)
     bg.addImage("bg24",img24)
     bg.addImage("bg25",img25)
     bg.addImage("bg26",img26)
     bg.scale=2.8

     boat=createSprite(100,360,50,50)
     boat.addImage("b",boatimg)
     boat.scale=0.13
     boat.flip=false

     book=createSprite(700,450,50,50)
     book.addImage("b",bookimg)
     book.scale=0.08

     door=createSprite(130,260,50,50)
     door.addImage("d",doorimg)
     door.scale=0.2

     pillar1=createSprite(100,250,10,10)
     pillar2=createSprite(260,250,10,10)
     pillar3=createSprite(450,250,10,10)
     pillar4=createSprite(600,250,10,10)
     pillar1.addImage("p",pillarimg)
     pillar2.addImage("p",pillarimg)
     pillar3.addImage("p",pillarimg)
     pillar4.addImage("p",pillarimg)
     pillar1.scale=3
     pillar2.scale=3
     pillar3.scale=3
     pillar4.scale=3

//     npc1=createSprite(100,300,50,100)
//     npc1.addImage("n",npc1img)
//     npc1.scale=0.9
//     npc2=createSprite(200,300,50,100)
//     npc2.addImage("n",npc2img)
//     npc2.scale=0.4
     npc3=createSprite(100,300,50,100)
     npc3.addImage("n",npc3img)
     npc3.scale=0.4
//     npc4=createSprite(500,300,50,100)
//     npc4.addImage("n",npc4img)
//     npc4.scale=0.6
     npc5=createSprite(200,330,50,100)
     npc5.addImage("n",npc5img)
     npc5.scale=0.75
     npc6=createSprite(100,300,50,100)
     npc6.addImage("n",npc6img)
     npc6.scale=0.6
     npc7=createSprite(350,340,50,100)
     npc7.addImage("n",npc7img)
     npc7.scale=0.14
     npc8=createSprite(500,320,50,100)
     npc8.addImage("n",npc8img)
     npc8.scale=0.13
     npc9=createSprite(100,300,50,100)
     npc9.addImage("n",npc9img)
     npc9.scale=0.5
     npc10=createSprite(640,330,50,100)
     npc10.addImage("n",npc10img)
     npc10.scale=0.43
     npc11=createSprite(550,280,50,100)
     npc11.addImage("n",npc11img)
     npc11.scale=0.67
     npc12=createSprite(540,350,50,100)
     npc12.addImage("n",npc12img)
     npc12.scale=0.16
     npc13=createSprite(500,300,50,100)
     npc13.addImage("n",npc13img)
     npc13.scale=0.3
     npc14=createSprite(100,300,50,100)
     npc14.addImage("n",npc14img)
     npc14.scale=0.6
     npc15=createSprite(100,300,50,100)
     npc15.addImage("n",npc15img)
     npc15.scale=0.6
     npc16=createSprite(620,350,50,100)
     npc16.addImage("n",npc16img)
     npc16.scale=0.65
     npc17=createSprite(260,310,50,100)
     npc17.addImage("n",npc17img)
     npc17.scale=0.23
     npc18=createSprite(70,350,50,100)
     npc18.addImage("n",npc18img)
     npc18.scale=0.15
     npc19=createSprite(100,300,50,100)
     npc19.addImage("n",npc19img)
     npc19.scale=0.6
     npc20=createSprite(270,350,50,100)
     npc20.addImage("n",npc20img)
     npc20.scale=0.51
     npc21=createSprite(340,260,50,100)
     npc21.addImage("n",npc21img)
     npc21.scale=0.265
     npc22=createSprite(520,330,50,100)
     npc22.addImage("n",npc22img)
     npc22.scale=0.39
     npc23=createSprite(280,320,50,100)
     npc23.addImage("n",npc23img)
     npc23.scale=0.32

     door1=createSprite(500,310,40,100)
     door2=createSprite(450,310,40,100)
     door3=createSprite(280,300,100,100)
     door4=createSprite(660,300,50,70)
     door5=createSprite(160,250,100,200)
     door6=createSprite(330,250,50,100)
     door7=createSprite(60,340,50,100)
     door8=createSprite(400,250,50,50)
     door9=createSprite(470,200,100,50)
     door10=createSprite(120,330,70,70)
     door11=createSprite(650,40,50,50)
     door12=createSprite(550,330,100,50)
     door13=createSprite(110,200,50,50)
     door14=createSprite(240,200,50,50)
     door15=createSprite(180,120,50,20)
     door16=createSprite(590,200,50,50)
     door17=createSprite(650,270,50,50)

     mc=createSprite(100,340,50,200)
     mc.addImage("mc",mcimg)
     mc.scale=0.35;

}
function draw(){ 
if(game===0){
    background(0)
drawSprites()
    move()
if(keyDown("space")){gamestate=8}
if(keyDown("v")){gamestate=16}
console.log(gamestate)
door1.visible=false
door2.visible=false
door3.visible=false
door4.visible=false
door5.visible=false
door6.visible=false
door7.visible=false
door8.visible=false
door9.visible=false
door10.visible=false
door11.visible=false
door12.visible=false
door13.visible=false
door14.visible=false
door15.visible=false
door16.visible=false
door17.visible=false

//npc1.visible=false
//npc2.visible=false
npc3.visible=false
//npc4.visible=false
npc5.visible=false
npc6.visible=false
npc7.visible=false
npc8.visible=false
npc9.visible=false
npc10.visible=false
npc11.visible=false
npc12.visible=false
npc13.visible=false
npc14.visible=false
npc15.visible=false
npc16.visible=false
npc17.visible=false
npc18.visible=false
npc19.visible=false
npc20.visible=false
npc21.visible=false
npc22.visible=false
npc23.visible=false

door.visible=false
book.visible=false
boat.visible=false 
pillar1.visible=false 
    pillar2.visible=false 
    pillar3.visible=false 
    pillar4.visible=false 
} 
if(gamestate===0){
    mc.visible=false
    bg.changeImage("bg26",img26)
    bg.scale=0.25
    mc.y=360
    pillar1.visible=true
    pillar2.visible=true
    pillar3.visible=true
    pillar4.visible=true
    var op=createSprite(360,460,60,20)
    op.visible=false
    textSize(18)
    fill("white")
    stroke("black")
    strokeWeight(3)
     text("(exit)",340,465)
     if(mousePressedOver(op)){gamestate=2
    mc.x=200}
}
if(gamestate===1){
 //   npc3.visible=true
    bg.changeImage("bg",img1)
    bg.scale=0.25
    bg.x=470
if(mc.x>700){mc.x=690}
if(mc.x<0){mc.x=650
gamestate=2}
if(s1===0){
    var op=createSprite(360,460,60,20)
    op.visible=false
    textSize(18)
    fill("white")
    stroke("black")
    strokeWeight(3)
   //  text("I'm glad you have come to our aid. The kingdom of Cordonia needs your help. The four",1,420)
   //  text("kingdoms have left our kingdom in ruins, what is left of it has come together.",10,440)
     fill("yellow")
    // text("Okay",340,465)
     if(mousePressedOver(op)){s1=1}   
}
if(s1===1){
    var op=createSprite(360,440,60,20)
    op.visible=false
    textSize(18)
    fill("white")
    stroke("black")
    strokeWeight(3)
    // text("We want you to accept the four kingdoms' invitation, go to Stormgold and collect",10,360)
   //  text("information. First, you will need some coins. Go to the passage outside and find",10,380)
   //  text("the four pillars with runes enscribed on them. The one with the V-shaped rune has",10,400)
   //  text("the mpost coins behind it. Our kingdom's future is in your hands.",10,420)
     fill("yellow")
   //  text("Okay",340,445)
     if(mousePressedOver(op)){s1=2}   
}
if(s1===2){
    if(mc.x<10){gamestate=2
    mc.x=670}
    if(mc.x>700){mc.x=690}
}
}
if(gamestate===2){
  bg.changeImage("bg6",img6)
  bg.scale=0.84
  bg.x=350
  if(mousePressedOver(door1)){gamestate=3}
  if(mc.x<0){gamestate=0}
  if(mc.x>700)  {gamestate=1}
  mc.visible=true
  textSize(16)
    fill("white")
    stroke("black")
    strokeWeight(3)
  text("(exit)",485,320)
}
if(gamestate===3){
    stroke("black")
    strokeWeight(3)
    bg.changeImage("bg2",img2)
    bg.scale=1.05
    bg.y=250
    bg.x=350
    if(mousePressedOver(door2)){gamestate=2} 
    if(mc.x<10){gamestate=4
    mc.x=150}
    if(mc.x>700){mc.x=690} 
    textSize(16)
    fill("white") 
    text("(castle)",430,320)    
}
if(gamestate===4){
    bg.changeImage("bg3",img3)
   // npc10.visible=true  
    bg.scale=1.2
    bg.x=500
    bg.y=230
    if(mc.x<0){gamestate=3
    mc.x=150}
    if(mc.x>670){gamestate=5
        mc.x=50} 
}
if(gamestate===5){
    bg.changeImage("bg4",img4)
    bg.scale=1.3
    bg.x=350
    if(mc.x<10){gamestate=4
        mc.x=660}
    if(mc.x>700){gamestate=6
        mc.x=10}    
}
if(gamestate===6){
    bg.changeImage("bg5",img5)
    bg.scale=1
    bg.x=400
    if(mc.x<10){gamestate=5
        mc.x=690}
    if(mc.x>700){mc.x=690} 
    if(mousePressedOver(door3)){gamestate=7
    mc.x=50} 
    textSize(16)
    fill("white") 
    stroke("black")
    strokeWeight(3)
    text("(river)",270,270)  
}
if(gamestate===7){ 
    bg.changeImage("bg18",img18)
    bg.scale=1.45
    bg.y=260
    bg.x=200
    boat.visible=true
  //  npc21.visible=true
    if(mc.x>700){mc.x=690}
    if(mc.x<0){mc.x=350
    gamestate=6}
}
if(gamestate===8){
  //  npc12.visible=true
   // npc21.visible=true
    npc21.x=100
    npc21.y=290
    npc21.scale=0.25
    bg.changeImage("bg7",img7)
    bg.scale=1.55
    bg.x=340
    bg.y=250
    if(mc.x>700){gamestate=9
        mc.x=50}
        if(mc.x<0){mc.x=10} 
        if(mousePressedOver(door8)){gamestate=14
            mc.x=50}
        stroke("black")
        strokeWeight(3)
        fill("white")
        textSize(16)
        text("(street)",380,260)
}
if(gamestate===9){
  //  npc7.visible=true
    bg.changeImage("bg8",img8)
    bg.scale=1.055
    bg.x=400   
    if(mc.x<0){gamestate=8
              mc.x=670} 
              if(mc.x>700){mc.x=690} 
    if(mousePressedOver(door4)){gamestate=10
        mc.x=350}
    textSize(16)
    stroke("black")
    strokeWeight(3)
    fill("white")
    text("(street)",650,280)
}
if(gamestate===10){
  //  npc16.visible=true
    bg.changeImage("bg9",img9)
    bg.scale=1.15
    bg.x=400 
    if(mc.x>700){mc.x=690}      
    if(mc.x<0){mc.x=650
    gamestate=9}
    if(mousePressedOver(door5)){gamestate=11
    mc.x=650}
    if(mousePressedOver(door6)){gamestate=13
        mc.x=50}
        stroke("black")
        strokeWeight(3)
        fill("white")
        textSize(16)
            text("(tavern)",300,230) 
            text("(Ms. Riddle's house)",100,230) 
            if(mousePressedOver(door9)){gamestate="14"
            mc.x=50}  
    text("(street)",450,220)            
}
if(gamestate===11){
   // npc8.visible=true
    bg.changeImage("bg11",img11)
    bg.scale=0.5 
    bg.x=400   
    if(mc.x<0){gamestate=12
    mc.x=690}
    if(mc.x>700){gamestate=10
    mc.x=350}
}
if(gamestate===12){
    bg.changeImage("bg10",img10)
    bg.scale=0.4
    bg.x=500
    if(mc.x<0){mc.x=10}
    if(mc.x>700){gamestate=11
    mc.x=10}
}
if(gamestate===13){
  //  npc5.visible=true 
    bg.changeImage("bg13",img13)
    bg.scale=0.75
    if(mc.x<0){mc.x=10}
    if(mc.x>700){mc.x=690}
    if(mousePressedOver(door7)){gamestate=10
        mc.x=350}
        textSize(16)
    stroke("black")
    strokeWeight(3)
    fill("white")
        text("(exit)",50,330)
}
if(gamestate===14){
  //  npc18.visible=true
    bg.changeImage("bg19",img19)
    bg.x=330
    bg.scale=1.43
if(mc.x>700){mc.x=690}
if(mc.x<0){mc.x=10}
if(mousePressedOver(door3)){gamestate=10}
if(mousePressedOver(door10)){gamestate=8}
if(mousePressedOver(door4)){gamestate=15}
textSize(16)
stroke("black")
strokeWeight(3)
fill("white")
text("(port)",100,320)
text("(street)",270,310)
text("(Potionmaker's house)",540,300)
}
if(gamestate===15){
    bg.x=447
   bg.changeImage("bg14",img14)
   bg.scale=0.865
   if(mousePressedOver(door11)){gamestate=14}
   textSize(16)
stroke("black")
strokeWeight(3)
fill("white")
   text("(exit)",620,40)
   if(mc.x>700){mc.x=690}
if(mc.x<0){mc.x=10}
book.visible=true
}
if(gamestate===16){
bg.changeImage("bg15",img15)
bg.scale=0.57
bg.x=200
if(mousePressedOver(door12)){gamestate=17
mc.x=400}
textSize(16)
stroke("black")
strokeWeight(3)
fill("white")
   text("(enter)",520,340)
   if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
  // npc21.visible=true
   npc21.x=240
   npc21.y=360   
} 
if(gamestate===17){
 //   npc20.visible=true
 //   npc22.visible=true
bg.changeImage("bg16",img16)
bg.scale=1
bg.x=350
if(mc.x<0){gamestate=18
mc.x=300}
if(mc.x>700){gamestate=16
mc.x=300}
}
if(gamestate===18){
    bg.changeImage("bg17",img17)
    bg.scale=1  
    if(mc.x<0){gamestate=17
        mc.x=300}
        if(mc.x>700){mc.x=690} 
        if(mousePressedOver(door13)) {gamestate=19
        mc.x=630}
        if(mousePressedOver(door14)) {gamestate=22
        mc.x=100}
        if(mousePressedOver(door15)) {gamestate=21
        mc.x=350}
        textSize(16)
        stroke("black")
        strokeWeight(3)
        fill("white")
        text("(left)",90,200)  
        text("(right)",220,200) 
        text("(forward)",150,120)  
}
if(gamestate===19){
  //  npc13.visible=true
 bg.changeImage("bg20",img20)
 bg.scale=0.7   
 if(mousePressedOver(door16)){gamestate=20}
 if(mc.x>700){gamestate=18
mc.x=300}
if(mc.x<0){mc.x=10}
textSize(16)
        stroke("black")
        strokeWeight(3)
        fill("white")
text("(bedroom)",550,220)
}
if(gamestate===20){
    bg.changeImage("bg21",img21)
    bg.scale=0.7   
    if(mc.x<0){mc.x=10}  
    if(mc.x>700){gamestate=19
        mc.x=500}
}
if(gamestate===21){
bg.changeImage("bg22",img22)
bg.scale=1.5
door.visible=true
if(mc.x<0){mc.x=10}
    if(mc.x>700){gamestate=18
        mc.x=100} 
        if(mousePressedOver(door5)){gamestate=25}
}
if(gamestate===22){
  //  npc17.visible=true
    bg.changeImage("bg23",img23)
    bg.scale=1.5 
    if(mc.x<0){gamestate=18
    mc.x=300}
    if(mc.x>700){mc.x=690} 
        if(mousePressedOver(door17)){gamestate=23
        mc.x=630}
        textSize(16)
        stroke("black")
        strokeWeight(3)
        fill("white")
text("(balcony)",630,270)        
}
if(gamestate===23){
  //  npc11.visible=true
    bg.changeImage("bg24",img24)
    bg.scale=0.8 
    if(mc.x<100){mc.x=110}
    if(mc.x>700){gamestate=22
        mc.x=300}        
}
if(gamestate===24){
    bg.changeImage("bg25",img25)
    bg.scale=1.5 
    if(mc.x<0){gamestate=18
    mc.x=300}
    if(mc.x>700){gamestate=25
        mc.x=100} 
              
}
if(gamestate===25){
 //   npc23.visible=true
bg.changeImage("bg25",img25)
bg.scale=0.7 
if(mc.x<100){mc.x=110}  
if(mc.x>700){gamestate=21
mc.x=300}
}
} 
function move(){
    if(keyDown("left")){
    mc.x=mc.x-25}
    if(keyDown("right")){
    mc.x=mc.x+25}
}
