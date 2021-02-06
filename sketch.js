const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  box1 = new Boxes(400,100,50,50);
  box2 = new Boxes(450,100,50,50);
  box3 = new Boxes(500,100,50,50);
  box4 = new Boxes(400,150,50,50);
  box5 = new Boxes(450,150,50,50);
  box6 = new Boxes(500,150,50,50);
  box7 = new Boxes(400,200,50,50);
  box8 = new Boxes(450,200,50,50);
  box9 = new Boxes(500,200,50,50);
  box10 = new Boxes(400,250,50,50);
  box11 = new Boxes(450,250,50,50);
  box12 = new Boxes(500,250,50,50);
  box13 = new Boxes(400,300,50,50);
  box14 = new Boxes(450,300,50,50);
  box15 = new Boxes(500,300,50,50);
  box16 = new Boxes(400,350,50,50);
  box17 = new Boxes(450,350,50,50);
  box18 = new Boxes(500,350,50,50);
  box19 = new Boxes(400,400,50,50);
  box20 = new Boxes(450,400,50,50);
  box21 = new Boxes(500,400,50,50);
  box22 = new Boxes(400,450,50,50);
  box23 = new Boxes(450,450,50,50);
  box24 = new Boxes(500,450,50,50);

  platform = new ground(150,486,800,20);

wb1 = new WreckingBall(250,250,40)

chain = new Rope(wb1.body, {x:250, y:200})

   }

   function draw()
   {
     background("grey");
     Engine.update(engine);

     box1.display()
     box2.display()
     box3.display()
     box4.display()
     box5.display()
     box6.display()
     box7.display()
     box8.display()
     box9.display()
     box10.display()
     box11.display()
     box12.display()
     box13.display()
     box14.display()
     box15.display()
     box16.display()
     box17.display()
     box18.display()
     box19.display()
     box20.display()
     box21.display()
     box22.display()
     box23.display()
     box24.display()

     platform.display()

     wb1.display()

     chain.display()
  }

  function MouseDragged()
  {
    Matter.Body.setPosition(wb1.body,{x : mouseX, y : mouseY});
  }
