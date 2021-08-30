// p5 can not be executed the normal "global" way
// Instead a sketch instance has to be manually created
// This is done with the closure below

/**
 * Initialize variables
 * 
 * Note: The gm-wrap element no longer works, as
 * of aug-2021, "game-embed" is used instead.
 */
const bodyRect = document.body.getBoundingClientRect();
const elemRect = document.getElementById("game-embed").getBoundingClientRect();
const offsetTop = elemRect.top - bodyRect.top;
const offsetLeft = elemRect.left - bodyRect.left;

// The above function closure is passed into a p5 object constructor
// this starts the sketch.

const sketch = (p5) => {
  // setup canvas
  p5.setup = () => {
    console.log('p5 running');
    const c = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    c.style("pointer-events", "none");
    c.position(offsetLeft + 55, offsetTop + 124);
    p5.clear();
    p5.noFill();
    p5.noLoop();
    p5.stroke(255, 30);
  };
  // draw the guidelines
  p5.draw = () => {
    p5.clear();
    // set stroke weight
    p5.strokeWeight(2);
    // set transparency
    p5.stroke(255, 30);
    p5.line(0, 0, p5.mouseX, p5.mouseY);
    p5.line(285, 0, p5.mouseX, p5.mouseY);
    p5.line(570, 0, p5.mouseX, p5.mouseY);
    p5.line(0, 274, p5.mouseX, p5.mouseY);
    p5.line(285, 274, p5.mouseX, p5.mouseY);
    p5.line(570, 274, p5.mouseX, p5.mouseY);
    // increase the transparency of the circle
    p5.stroke(255, 100);
    p5.ellipse(p5.mouseX, p5.mouseY, 16);
  };
  // change the layout if mouse is moved and SHIFT key is pressed
  p5.mouseMoved = () => {
    if (p5.keyIsDown(p5.SHIFT)) {
      p5.draw();
    }
  };
  p5.keyPressed = () => {
    if (p5.keyIsDown(p5.SHIFT)) {
      p5.draw();
    }
  };
};

const myp5 = new p5(sketch);
