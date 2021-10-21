const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";
function sync(){
    var response= await fetch("http://worldtime api.org/api/timezone/Asia/Kolkata");
    }
function preload() {
    getBackgroundImg({"abbreviation":"IST","client_ip":"223.235.233.166","datetime":"2021-09-14T21:32:39.807614+05:30","day_of_week":2,"day_of_year":257,"dst":false,"dst_from":null,"dst_offset":0,"dst_until":null,"raw_offset":19800,"timezone":"Asia/Kolkata","unixtime":1631635359,"utc_datetime":"2021-09-14T16:02:39.807614+00:00","utc_offset":"+05:30","week_number":37});
    
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    var response = await fetch("");

    var responseJSON= await resonse.jason();
    console.log(responseJSON);

    
    var datetime = responseJSON.datetime;
    
    

    var hour= datetime.slice(11,13);
    

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
