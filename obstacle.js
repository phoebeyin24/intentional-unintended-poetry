//all the interactable objects that will display a line of a poem on collision
class obstacle{
	constructor(img,x,y,w,h){
		this.img = img
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		}	
	display(){
		//changes behaviors depending on page number
		if (page == 1){
			image(this.img,this.x,this.y,this.w,this.h)
		}else if (page == 2){
			image(this.img,this.x,this.y,this.w,this.h)
		}else if (page == 4){
			image(this.img,this.x,this.y,this.w,this.h)
		}else if (page == 6){
			image(this.img,this.x,this.y,this.w,this.h)
		}else if(page == 8){
			fill(255)
			image(this.img,this.x,this.y,this.w,this.h)
		}
	}
}
