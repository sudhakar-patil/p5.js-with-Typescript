import _ from "lodash";
import p5 from "p5";
import P5 from "p5";
import CircleWithText from "./circleText";
let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let circles: CircleWithText[] = [];
let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape
let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
 
// Creating the sketch itself
const sketch = (p5: P5) => {

	// The sketch setup method 
	p5.setup = () => {
		// Creating and positioning the canvas
		const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
		canvas.parent("app");

		for (let i = 0; i < alphabets.length; i++) {
			circles.push(new CircleWithText(p5, alphabets[i], xdirection, ydirection,
				xspeed, yspeed, p5.width /p5.random(1,10), p5.height/p5.random(1,10),p5.random(70,90),
				p5.color(p5.random(0,255),p5.random(0,255),p5.random(0,255))));
		}
	};

	// The sketch draw method
	p5.draw = () => {
		// Configuring the canvas
		p5.background(0);
		p5.noStroke();
		circles.forEach((c) => {

			c._xwidth = c._xwidth + c._xspeed * c._xDirection;
			c._ywidth = c._ywidth + c._yspeed * c._yDirection;
			if (c._xwidth > p5.width - c._radius || c._xwidth < c._radius) {
				c._xDirection *= -1;
			}
			if (c._ywidth > p5.height - c._radius || c._ywidth < c._radius) {
				c._yDirection *= -1;
			}
			c.drawWithText(c._xwidth, c._ywidth, c._radius);
		})
	};

	p5.mousePressed = () => {

	}
	p5.keyPressed = () =>
	{
		if (p5.key >= 'a' && p5.key <= 'z') {
			circles = circles.filter((x)=> x._text != p5.key.toUpperCase());			
		}
	}
};

new P5(sketch);
