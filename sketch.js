var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
  
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    //Translation and rotation 
    translate(200,200);
    rotate(-90);

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

  
    //To create ab iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //drawing seconds hand
    push();
    rotate(hrAngle); //rotate the hand based on angle calculated
    stroke("green");
    strokeWeight(7);
    line(0,0,60,0);
   arc(110, 0, 100,0, 60, PI + QUARTER_PI, PIE);
    pop()
  
    push();
    rotate(mnAngle); //rotate the hand based on angle calculated
    stroke("white");
    strokeWeight(7);
    line(0,0,80,0);
   arc(120, 0, 100,0, 60, PI + QUARTER_PI, PIE);
    pop()
  
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(247, 139, 7);
    strokeWeight(7);
    line(0,0,100,0);
    arc(130, 0, 100,0, 0, 60, PIE);
    pop()

    
}
