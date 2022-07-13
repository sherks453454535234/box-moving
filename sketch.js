var box
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,20,20)

}

function draw() 
{
  background(30);
drawSprites()
if(keyDown("up")) {
box.y=box.y-5

}
if(keyDown("Down")){
box.y=box.y+5

}
if(keyDown("left")){
box.x=box.x-5
}
if(keyDown("right")){
box.x=box.x+5
}








}




