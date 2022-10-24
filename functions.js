//basic movement of the player and collision checking
function player(){
	fill(0,255,0);
	rect(xpos,ypos,50,50);
	if (xpos>10 && keyIsDown(LEFT_ARROW)) {
    xpos -= movespd;
  }

  else if (xpos<990 && keyIsDown(RIGHT_ARROW)) {
    xpos += movespd;
  }

  else if (ypos>10 && keyIsDown(UP_ARROW)) {
    ypos -= movespd;
  }

  else if (ypos<590 && keyIsDown(DOWN_ARROW)) {
    ypos += movespd;
	}
	if (page == 1){
	
		if (xpos>obs1.x-obs1.w && xpos<obs1.x+obs1.w && ypos>obs1.y-obs1.h && ypos<obs1.y+obs1.h || 
				xpos>obs2.x-obs2.w && xpos<obs2.x+obs2.w && ypos>obs2.y-obs2.h && ypos<obs2.y+obs2.h ||
				xpos>obs3.x-obs3.w && xpos<obs3.x+obs3.w && ypos>obs3.y-obs3.h && ypos<obs3.y+obs3.h){
			movespd = movespd*-1;
		}
		else{
			movespd=10;
		}

		if (xpos>obs1.x-obs1.w && xpos<obs1.x+obs1.w && ypos>obs1.y-obs1.h && ypos<obs1.y+obs1.h){
			text01 = 1;
		}else if (xpos>obs2.x-obs2.w && xpos<obs2.x+obs2.w && ypos>obs2.y-obs2.h && ypos<obs2.y+obs2.h){
			text01 = 2;
		}else if  (xpos>obs3.x-obs3.w && xpos<obs3.x+obs3.w && ypos>obs3.y-obs3.h && ypos<obs3.y+obs3.h){
			text01 = 3;	
		}else if (xpos>exit1.x-exit1.w && xpos<exit1.x+exit1.w && ypos>exit1.y-exit1.h && ypos<exit1.y+exit1.h){
			page = 2
		}
	}
 if (page == 2){
		if (xpos>heart.x-heart.w && xpos<heart.x+heart.w && ypos>heart.y-heart.h && ypos<heart.y+heart.h){
			movespd = movespd*-1;
			text02 = 1
		}else{
			movespd=30;
		}
	  if (xpos>exit2.x-exit2.w && xpos<exit2.x+exit2.w && ypos>exit2.y-exit2.h && ypos<exit2.y+exit2.h){
			page = 3
			console.log('bump')
		}
	}
 if (page == 3){
	  if (xpos>exit3.x-exit3.w && xpos<exit3.x+exit3.w && ypos>exit3.y-exit3.h && ypos<exit3.y+exit3.h){
			page = 4
		}
 	}
 if (page == 4){
	 if (xpos>puddle.x-puddle.w && xpos<puddle.x+puddle.w && ypos>puddle.y-puddle.h && ypos<puddle.y+puddle.h){
	 	 movespd = movespd*-1; 
		 text03 = 1
	 }else{
		 movespd=10;
	 }
 }
} 


//a function to create the typing effect using substring and loops
function type(txt,x,y) {
	textSize(25);
	fill(255);
	if (n<txt.length){
		text(txt.substring(0, n+1), x, y);
		n++;
	}else if (n == txt.length){
		text(txt,x,y)
		
	}
	
}


	
	






