var Bar;
var bob1, bob2, bob3, bob4, bob5;
var Bob1constraint;
var Bob2constraint;
var Bob3constraint;
var Bob4constraint;
var testNumber
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(800, 700);
	matterEngine = Engine.create();
	matterWorld = matterEngine.world;

	testNumber = 0;

	//Create the Bodies Here.
	Bar = new Bars(width / 2, 150, 500, 50, { isStatic: true });
	bob1 = new Bob(200, 400, 50);
	Bob1constraint = new TheBobsConstraints(bob1.body, {x:200, y:150})
	bob2 = new Bob(300, 400, 50);
	Bob2constraint = new TheBobsConstraints(bob2.body, {x:300, y:150})
	bob3 = new Bob(400, 400, 50);
	Bob3constraint = new TheBobsConstraints(bob3.body, {x:400, y:150})
	bob4 = new Bob(500, 400, 50);
	Bob4constraint = new TheBobsConstraints(bob4.body, {x:500, y:150})
	bob5 = new Bob(600, 400, 50);
	Bob5constraint = new TheBobsConstraints(bob5.body, {x:600, y:150});
	Engine.run(matterEngine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	bob1.show();
	bob2.show();
	bob3.show();
	bob4.show();
	bob5.show();
	Bar.show();
	Bob1constraint.show();
	Bob2constraint.show();
	Bob3constraint.show();
	Bob4constraint.show();
	Bob5constraint.show();
	console.log(testNumber);
}
function keyPressed(){
	if(keyCode == 32){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:10, y:150})
	}
}
