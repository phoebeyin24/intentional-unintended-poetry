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
			image(lotus,this.x,this.y,this.w,this.h)
		}else if (page == 2){
			image(heartimg,this.x,this.y,this.w,this.h)
		}else if (page == 4){
			image(pool,this.x,this.y,this.w,this.h)
		}else if (page == 6){
			fill(255)
			rect(this.x,this.y,this.w,this.h)
		}else if(page == 8){
			fill(255)
			rect(this.x,this.y,this.w,this.h)
		}
	}
}
