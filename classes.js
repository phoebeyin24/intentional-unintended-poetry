//all the interactable objects that will display a line of a poem on collision
class obstacle{
	constructor(x,y,w,h){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		}	
	display(){
		//changes behaviors depending on page number
		if (page == 1){
			fill(255)
			rect(this.x,this.y,this.w,this.h)
		}else if (page == 2){
			fill(100,20,150)
			rect(this.x,this.y,this.w,this.h)
		}else if (page == 4){
			fill(85,200,120)
			rect(this.x,this.y,this.w,this.h)
		}
	}
}

//the object that brings the player to the next page
class exit{
	constructor(x,y,w,h){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
	}

	display(){
		//has different behaviors on different pages
		b += 0.02;
		let float = cos(b)*50;
		
		if (page == 1){
		fill(0,0,255)
		rect(this.x,this.y,this.w,this.h)
		}else if (page == 2){
		 fill(255)
		 rect(this.x , this.y+float, this.w,this.h);	
		}else if (page == 3){
			fill(50,26,170)
			rect(this.x,this.y,this.w,this.h)
		}
	}
	
}

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
