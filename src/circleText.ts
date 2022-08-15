import p5 from "p5";
import P5 from "p5";

export default class CircleWithText
{
    _p5: P5;
    _text: string;
    _xwidth:number;
    _ywidth:number;
    _xDirection:number;
    _yDirection:number;
    _xspeed: number;
    _yspeed: number;
    _radius:number;
    _color:p5.Color;
    
    constructor(p5: P5,text: string, xDirection:number, yDirection:number, 
        xspeed:number, yspeed:number, xwidth:number,ywidth:number,radius:number, color:p5.Color)
    {
        this._p5 = p5;
        this._text = text;
        this._xDirection = xDirection;
        this._yDirection = yDirection;
        this._xspeed = xspeed;
        this._yspeed = yspeed;
        this._xwidth = xwidth;
        this._ywidth = ywidth;
        this._radius = radius;
        this._color= color;
    }

    drawWithText(x:number, y:number,radius:number)
    {
        this._xwidth = x;
        this._ywidth = y;
        this._radius = radius;
        //this._p5.push();        
        this._p5.fill(this._color);
        this._p5.circle(x, y, radius);
        this._p5.fill(222);
        this._p5.textSize(25);
        this._p5.text(this._text,x, y);
        //this._p5.pop();
    }
}