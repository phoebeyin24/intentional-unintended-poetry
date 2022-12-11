//star backgroud on page 3 
class star{
	constructor(x,y,dir,spd){
		this.x = x
		this.y = y
		this.dir = dir
		this.spd = spd
	}
	move(){
		this.x = this.x+this.spd*cos(this.dir)
		this.y = this.y+this.spd*sin(this.dir)
		if(this.x>width||this.x<0){
			this.dir = PI - this.dir;
		}
		if(this.y>height||this.y<0){
			this.dir = TWO_PI - this.dir;
		}
	}
	display(){
		fill(255)
		square(this.x,this.y,random(2,5))
	}
}
