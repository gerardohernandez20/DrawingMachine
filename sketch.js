let array =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  strokeWeight(4);
  noFill();
}

function draw() {
if (mouseIsPressed){
  //stroke(map(mouseX,0,234,0,255,true))
//line(mouseX, mouseY, pmouseX,pmouseY);
array.push([mouseX,mouseY]);
}
}
function keyTyped(){
if (key == 's'){
  saveCanvas('fileName','png');
} else if (key === 'd'){
  //display image
  background(100);
  beginShape();

  console.log(array);
  for(let i = 0; i < array.length-1; i++){
//line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
curveVertex(array[i][0], array[i][1]);
  }
endShape();
}

return false;

}
