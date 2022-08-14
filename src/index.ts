import p5 from "p5";
import P5 from "p5";
//import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";	// Include if needed
//import "./styles.scss";

// DEMO: A sample class implementation
import MyCircle from "./MyCircle";

// Creating the sketch itself
const sketch = (p5: P5) => {
	 
	var pg:any={};

	// The sketch setup method 
	p5.setup = () => {
		// Creating and positioning the canvas
		const canvas = p5.createCanvas(710, 400);
		pg = p5.createGraphics(400, 250);
		canvas.parent("app");

		// Configuring the canvas
		p5.background('white'); 
	};

	// The sketch draw method
	p5.draw = () => {
  p5.fill(0, 12);
  p5.rect(0, 0, p5.width, p5.height);
  p5.fill(255);
  p5.noStroke();
  p5.ellipse(p5.mouseX, p5.mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(p5.mouseX - 150, p5.mouseY - 75, 60, 60);

  //Draw the offscreen buffer to the screen with image()
  p5.image(pg, 150, 75);
	};
};

new P5(sketch);
