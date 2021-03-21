const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1;
var block1,block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;

var polygon, polygonImg;

var sling;
var score=0;
function preload(){
    polygonImg = loadImage("polygon.png");
}


function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    stand1= new Ground(570,500,280,20);

    //level1
    block1= new Box(480,470,30,40);
    block2= new Box(510,470,30,40);
    block3= new Box(540,470,30,40);
    block4= new Box(570,470,30,40);
    block5= new Box(600,470,30,40);
    block6= new Box(630,470,30,40);
    block7= new Box(660,470,30,40);

    //level2
    block8= new Box(510,430,30,40);
    block9= new Box(540,430,30,40);
    block10= new Box(570,430,30,40);
    block11= new Box(600,430,30,40);
    block12= new Box(630,430,30,40);

    //level 3
    block13= new Box(540,390,30,40);
    block14=new Box(570,390,30,40);
    block15= new Box(600,390,30,40);

    //level 4
    block16= new Box(570,350,30,40);
    
    polygon= Bodies.circle(200,500,20);
    World.add(world,polygon);

    sling= new SlingShot(polygon, {x:150, y: 450});   
 
}

function draw(){
    background("aqua");
    Engine.update(engine);
    stand1.display();
    fill("lightblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("lightpink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("blue");
    block13.display();
    block14.display();
    block15.display();

    fill("red");
    block16.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    text("SCORE:  " + score,750,40);
  
    var angle = polygon.angle;
   
    posX=polygon.position.x;
    posY=polygon.position.y;
    
    imageMode(CENTER);
    image(polygonImg,posX,posY,50,50);
    
    sling.display();

    drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon);
    }
    
}
async function dayNightDiff(){

    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);

    var dateTime= responseJSON.datetime;
    var hour= dateTime.slice(11,13);
    console.log(hour);
    if(hour >= 06 && hour <= 19){

        background("aqua");
    } 
    else{

        background("blue");

    } 
}