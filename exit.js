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
		b += 0.05;
		let float = cos(b)*20;
		
		if (page == 1){
			image(e1,this.x,this.y,this.w,this.h)
		}else if (page == 2){
		 	
		  image(e2,this.x , this.y+float, this.w,this.h)	
		}else if (page == 3){
			
			image(e3,this.x,this.y,this.w,this.h)
		}else if (page == 4){
			rect(this.x,this.y,this.w,this.h)
		}else if (page == 5){
			rect(this.x,this.y,this.w,this.h)
		}else if (page ==6){
			fill(0,128,0)
			rect(this.x,this.y,this.w,this.h)
		}else if (page == 7){
			fill(0,255,0)
			rect(this.x,this.y,this.w,this.h)
		}else if (page == 8){
			fill(0)
			rect(this.x,this.y,this.w,this.h)
		}
	}
	
	move3(){
		this.x+=random(-3,3)
		this.y+=random(-3,3)
	}
	
}