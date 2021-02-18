const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var box1, pig1;
var bg

function preload(){
    bg = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(900,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(900,340,70,70);
    box4 = new Box(920,340,70,70);
    box5 = new Box(810,360,70,70);
    box6 = new Box(840,390,70,70);
    box7 = new Box(880,270,70,70);
    box8 = new Box(840,230,70,70);
    box9 = new Box(810,270,70,70);
    box10 = new Box(940,290,70,70)
    box11 = new Box(930,280,70,70)
    box12 = new Box(900,250,70,70)
   

    bird = new Bird(100,100);

    slingshot = new SlingShot(bird.body,{
        x: 200 , y: 200
    })

}

function draw(){
    background(bg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
  

    box3.display();
    box4.display();
  

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    bird.display();
    slingshot.display();
    
}

function mouseDragged(){
Matter.Body.setPosition(bird.body,{
    x:mouseX , y:mouseY
})
}

function mouseReleased(){
slingshot.fly();

}