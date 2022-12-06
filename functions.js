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
//a function to control the background images between pages
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
	}else if (page ==5){
		background(50);
	}else if (page ==6){
		background(20);
	}else if (page == 7){
		background(30)
	}else if (page == 8){
		background(40);
	}else if (page ==9){
		background (0);
	}
}


// function sounds(){
// 		if (box !=false){
// 		 if (typingsd.isPlaying()){
// 		  typingsd.stop();
// 		}
// 	  else{
// 		  typingsd.playMode('restart')
// 		  typingsd.play();
		  
// 		}
// 	}else{
// 		typingsd.stop();
// 	}
// }

//a function called on page 0 to show the title
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

//only for testing
function testing(){
	if (keyIsDown(49)){
		page = 1;
	}else if (keyIsDown(50)){
		page = 2;
	}else if (keyIsDown(51)){
		page = 3;
	}else if (keyIsDown(52)){
		page = 4;
	}else if (keyIsDown(53)){
		page = 5;
	}else if (keyIsDown(54)){
		page = 6;
	}else if (keyIsDown(55)){
		page = 7;
	}else if (keyIsDown(56)){
		page = 8;
	}else if (keyIsDown(57)){
		page = 9;
	}
}

function drawStreak() {
	let y = floor(random(height));
	let h = floor(random(20, 30)); //floor(random(1, 100));
	let xChange = floor(map(noise(y * yNoiseChange, (mouseY * mouseYNoiseChange + frameCount) * timeNoiseChange), 0.06, 0.94, -maxXChange, maxXChange)); 
	let yChange = floor(xChange * (maxYChange / maxXChange) * random() > 0.1 ? -1 : 1);
	if (random() < dist(pmouseX, pmouseY, mouseX, mouseY) / width * 0.3 + 0.0015) filter(POSTERIZE, floor(random(2, 5)));
	image(video, xChange - maxXChange+790, -maxYChange + y + yChange +120, video.width, h, 0, y, video.width, h);
}


function countdown(){
	// if the frameCount is divisible by 18, then a second has passed. it will stop at 0
	if (frameCount % 18 == 0 && timer > 0) {
		timer --;
	}
	if (timer == 0) {
		page = 10;
	}
}


	







	
	






