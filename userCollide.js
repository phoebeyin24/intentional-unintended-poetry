//This function handles: 
//1.user movement using wasd
//2.user collision with objects and exits
//3.keeping track of specific text to display at specific events

function userCollide(){
	//draw player sprite page 1
	if (page == 1 || page == 2){
		image(ghost,xpos,ypos,80,80);
	}else if (page == 4){
		image(umbrella,xpos,ypos,80,80);
	}else if (page ==3){
		image(darkghost,xpos,ypos,80,80);
	}
	
	//uses keyIsDown to record key input, player moves according to movespd variable
	if (xpos>10 && keyIsDown(LEFT_ARROW)) {
    xpos -= movespd;
  }

  else if (xpos<1270 && keyIsDown(RIGHT_ARROW)) {
    xpos += movespd;
  }

  else if (ypos>10 && keyIsDown(UP_ARROW)) {
    ypos -= movespd;
  }

  else if (ypos<710 && keyIsDown(DOWN_ARROW)) {
    ypos += movespd;
	}
	
	
	
	
	//this if statement handles all the collision happening on page 1
	if (page == 1){
			//console.log(text01);
		  console.log(obs1.y-obs1.h);
			console.log(ypos);
	
		//these if statements manage 2 variables upon collision with the 3 objects on page 1
		//the bump and text variables
		if (xpos>=obs1.x-obs1.w+30 && xpos<=obs1.x+obs1.w-30 && ypos>=obs1.y-obs1.h && ypos<=obs1.y+obs1.h){
			//when the bump variable is true, collision between user and obstacles check for true
			//run the user position reset statements below
			
			bump1 = true;
			text01 = true;
			text02 = false;
			text03 = false;
	    box = true;
		}else if (xpos>=obs2.x-obs2.w && xpos<=obs2.x+obs2.w && ypos>=obs2.y-obs2.h && ypos<=obs2.y+obs2.h){
			bump2 = true;
			text01 = false;
			text02 = true;
			text03 = false
			box = true;
		}else if (xpos>=obs3.x-obs3.w && xpos<=obs3.x+obs3.w && ypos>=obs3.y-obs3.h && ypos<=obs3.y+obs3.h){
			bump3 = true;
			text01 = false;
			text02 = false;
			text03 = true;
			box = true;
		}else{
			//if nothing is colliding,reset variable in function type(txt,x,y) so the text could be displayed from the 
			//beginning multiple times
			n = -1;
			box = false
		}
		
		
		//is the user coming from left or right? up or down?
		//checks for the direction of the user coming, and resetting the position of user to
		//create a "wall" effect.
		
		//object1
	 if (bump1 ==true){
			if (keyIsDown(DOWN_ARROW)||keyIsDown(UP_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)){
			//console.log("keytest");
			bump1 = false;
			}
			if(xpos > obs1.x-30){
				
				xpos = obs1.x+obs1.w-30;
	
				//console.log("right");

			}else if(xpos < obs1.x+30){
	
				xpos = obs1.x-obs1.w+30;
			
			 //console.log("left");
			}
		  if(ypos < obs1.y){
				ypos = obs1.y-obs1.h;
				//xpos = obs1.x
			 console.log("up");
			}else if(ypos > obs1.y){
			  ypos = obs1.y+obs1.h;	
				//xpos = obs1.x
		 }
	 }
		
		//object2
	  if (bump2 ==true){
			if (keyIsDown(DOWN_ARROW)||keyIsDown(UP_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)){
			//console.log("keytest");
			bump2 = false;
			}
			if(xpos > obs2.x){
				xpos = obs2.x+obs2.w;
				//console.log("right");

			}else if(xpos < obs2.x){
				xpos = obs2.x-obs2.w;	
			 //console.log("left");
			}else if(ypos < obs2.y){
				ypos = obs2.y-obs2.h;	
			 //console.log("up");
			}else if(ypos > obs2.y){
				ypos = obs2.y+obs2.h;	
      }
		}
			
		//object3
		if (bump3 ==true){
			if (keyIsDown(DOWN_ARROW)||keyIsDown(UP_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)){
			//console.log("keytest");
			bump3 = false;
			}
			if(xpos > obs3.x){
				xpos = obs3.x+obs3.w;
				//console.log("right");
			}else if(xpos < obs3.x){
				xpos = obs3.x-obs3.w;	
			 //console.log("left");
			}else if(ypos < obs3.y){
				ypos = obs3.y-obs3.h;	
			 //console.log("up");
			}else if(ypos > obs3.y){
				ypos = obs3.y+obs3.h;	
			}
		}
		//this if statement manages the player's collision with the exit, if it checks, the player is teleported
		//to the next page
		if(xpos>=exit1.x-exit1.w && xpos<=exit1.x+exit1.w && ypos>=exit1.y-exit1.h && ypos<=exit1.y+exit1.h){
				page = 2;
		}
	}
	
 //this if statement contains collision checking for objects on page2
 if (page == 2){
	  //console.log(box)
	  if (xpos>=heart.x-heart.w && xpos<=heart.x+heart.w && ypos>=heart.y-heart.h && ypos<=heart.y+heart.h){
			bump201 = true;
			text201 = true;
	    box = true;
		}else{
			n = -1;
			box = false;
		}
	  if (bump201 == true){
			if (keyIsDown(DOWN_ARROW)||keyIsDown(UP_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)){
			 	// console.log("keytest");
			  bump201 = false;
			}
			if(xpos > heart.x){
				xpos = heart.x+heart.w;
				//console.log("right");
				
			}else if(xpos < heart.x){
				xpos = heart.x-heart.w;	
		   //console.log("left");
			}else if(ypos < heart.y){
				ypos = heart.y-heart.h;	
	     //console.log("up");
			}else if(ypos > heart.y){
				ypos = heart.y+heart.h;	
		  //console.log("down");
			}
		}
	  if (xpos>exit2.x-exit2.w && xpos<exit2.x+exit2.w && ypos>exit2.y-exit2.h && ypos<exit2.y+exit2.h){
			page = 3
			
		}
	}
	
	//this if statement contains collision checking for objects on page 3
 if (page == 3){
	  if (xpos>exit3.x-exit3.w && xpos<exit3.x+exit3.w && ypos>exit3.y-exit3.h && ypos<exit3.y+exit3.h){
			page = 4
		}
 	}
	
	//this if statement contains collision checking for objects on page 4
 if (page == 4){
	 if (xpos>=puddle.x-puddle.w+120 && xpos<=puddle.x+puddle.w-120 && ypos>=puddle.y-puddle.h && ypos<=puddle.y+puddle.h){
	 	 bump401 = true;
		 text401 = true;
		 box = true;
	 }else{
		 n = -1;
		 box = false;
	 }
 }
	if (bump401 == true){
			if (keyIsDown(DOWN_ARROW)||keyIsDown(UP_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)){
			 	console.log(bump1);
			  bump401 = false;
			}
			if(xpos > puddle.x-120){
				xpos = puddle.x+puddle.w-120;
				//console.log("right");
				
			}else if(xpos < puddle.x+120){
				xpos = puddle.x-puddle.w+120;	
		   //console.log("left");
			}else if(ypos < puddle.y){
				ypos = puddle.y-puddle.h;	
	     //console.log("up");
			}else if(ypos > puddle.y){
				ypos = puddle.y+puddle.h;	
		  //console.log("down");
			}
		}
	
} 
