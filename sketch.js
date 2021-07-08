const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
   
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if (backgroundImg)
        background(backgroundImg);
    Engine.update(engine);

    textSize(30);
    fill("Black");
    text("7:19 pm", width-300, 50);
}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if (hour >= 06 && hour <= 19){

        bg="sunrise3.png";
    }
    else {

        bg="sunset12.png";
    }

    backgroundImg = loadImage(bg);

}
