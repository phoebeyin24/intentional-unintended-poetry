//a function to create the typing effect using substring and loops
function type(txt,x,y) {
	textFont(pixel);
	textSize(15);
	fill(255);
	if (n<txt.length){
		text(txt.substring(0, n+1), x, y);
		n++;
	}else if (n >= txt.length){
		text(txt,x,y)
		
	}
	
}

function imgcontrol(){
	if (page == 1){
		image(page1,width/2,height/2,1280,720);
	}else if (page ==2){
		image(page2,width/2,height/2,1280,720);
		image(statue,width/2,height/2,341.5,427);
	}else if (page ==3){
		image(page3,width/2,height/2,1280,720)
	}else if (page == 4){
		image(page4,width/2,height/2,1280,720);	
	}
}


// function sounds(){
// 		if (box !=false){
// 		 if (typingsd.isPlaying()){
// 		  typingsd.stop();
// 		}
// 	  else{
// 		  typingsd.loop();
// 		}
// 	}else{
// 		typingsd.stop();
// 	}
// }


function start(){
	fill(0)
	rect(width/2,height/2,1280,720)
	image(window1,width/2,height/2,600,425);
	type('intentional unintended poetry\n\n\npress enter >>',width/2+20,height/2)
	if (keyIsDown(ENTER)){
		page = 1;
		console.log("enter");
	}
}

	







	
	






