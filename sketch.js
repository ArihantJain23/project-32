const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;


function preload() {
    getbackgroundimage();
}



function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
 if(backgroundImg){

    
    background(backgroundImg);
    }


    // add condition to check if any background image is there to add
   // if(backgroundImage){
      //  background(backgroundImage);
       // }                                               


    Engine.update(engine);

    if(hour>=12){
        text('time:'+hour%12+'pm',50,100)
    }
else if(hour=0){
    text('time: 12am',50,100)
}

else{

text('time:'+hour%12+'am',50,100) 
}

    // write code to display time in correct format here


}



    
    async function getbackgroundimage(){
        var response=await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')  
        var responseJson=await response.json()
      console.log(responseJson.datetime)
       hour=responseJson.datetime.slice(11,13)
      if(hour>=06 && hour<=19){
          bg='sunrise1.png'
      }
      else{
          bg='sunset12.png'
      }
      backgroundImg=loadImage(bg);
    }
