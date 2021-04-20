let array =[];
let noiseOffset = 0.0;
let strokeWidth = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
drawGrid();
  noFill();
}

function draw() {
background(220,50,133,5);
strokeWeight(strokeWidth);
noiseOffset += 0.10;
strokeWidth = noise(noiseOffset) * 123;

  stroke(map(mouseX,0,234,0,255,true))
  line(width - mouseX, height - mouseY, width -pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX,pmouseY);


}
function keyTyped(){
if (key == 's'){
  saveCanvas('fileName','png');
} else if (key === 'c'){
  //display image
clear();
}

return false;

}

function mousePressed(){
array =[];
backgroundColor = 255;
}
function drawGrid(){
  numCells = 20;
for (i = 0; i <= width; i += width / numCells){
for (let j =0;j <= height; j += height / numCells){
  rect(i,j,width / numCells, height / numCells);


}
}

}
