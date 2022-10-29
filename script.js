// intentional unintended poetry is an interactive experience based on "zombie literature"  created by spam account bots on Weibo,
// a Chinese equivalent of twitter. In most cases, this type of text is the result of random postings by bot accounts with the help
// of algorithms in order to generate fake traffic. These text often show characteristics of logical confusion: random splicing of 
// sentences, mixed use of parts of speech, random characters, misuse of punctuation...Although they are meant to have no "meaning", 
//some of these "poems" generated by bots are accurate manifestations of the postmodernism concept. I've selected and translated
//some popular posts as the centerpieces of intentional unintended poetry. Interact with arrow keys/wasd.
//
//MUSIC:
//The Code of My Heart by gurdonark (c) copyright 2017 Licensed under a Creative Commons Attribution Noncommercial  (3.0) license.
//http://dig.ccmixter.org/files/gurdonark/55904 Ft: Speck
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//variables for player
let xpos = 1100;
let ypos = 600;
let movespd = 15;
let playerwidth = 50;
let playerheight = 50;

//page 1 variables
let text01 = false;
let text02 = false;
let text03 = false;
let bump1 = false;
let bump2 = false;
let bump3 = false;
let page = 0;
let box = false;


//page 2 variables
let text201 = false;
let bump201 = false;

//page 3 variables
let b = 0
let stars = []
let n = 0

//page 4 variables
let text401 = false;
let bump401 = false;

//loading image & sound variables
let page1;
let page2;
let page3;
let page4;
let statue;
let ghost;
let e1;
let heartimg;
let music;
let pool;
let exit2;
let umbrella;
let typingsd;
let window1;


function preload(){
	page1 = loadImage('images/page1-1.png')
	page2 = loadImage('images/page2-1.png')
	page3 = loadImage('images/page3-1.png')
	page4 = loadImage('images/page4-1.png')
	statue = loadImage('images/broken statue.png')
	ghost = loadImage('images/ghost.png')
	pixel = loadFont('font/PressStart2P-Regular.ttf')
	lotus = loadImage('images/lotus.png')
	e1 = loadImage('images/exit1.png')
	heartimg = loadImage('images/heart.png')
	pool = loadImage('images/humanpool.png')
	e2 = loadImage('images/exit2.png')
	e3 = loadImage('images/exit3.png')
	umbrella = loadImage('images/umbrella.png')
	window1 = loadImage('images/window1.png')
	//typingsd = loadSound("click.wav");
	
	music = loadSound('sound/thecodeofmyheart.mp3')
	
	
}

function setup() {
	
	frameRate(20);
	createCanvas(1280, 720);
	imageMode(CENTER);
	textAlign(CENTER);
	rectMode(CENTER); 
	noStroke();
	

	
	//instaces on page 1
	obs1 = new obstacle(700,600,120,120)
	obs2 = new obstacle(400,350,70,70)
	obs3 = new obstacle(820,200,50,50)
	exit1 = new exit(645,75,60,60)
	
  //instances on page 2
	heart = new obstacle(width/2,300,80,80)
	exit2 = new exit(width/2, 620,130,130)
	for(let i = 0; i<100; i++){
    stars[i] = new star(random(width),random(height),random(-PI,PI),random(0.1,1.2));

  }
	//instances on page 3
	exit3 = new exit(100,80,80,80)
	
	//instances on page 4
	puddle = new obstacle(1000,550,300,300)
}


function draw() {
	imgcontrol();
	//sounds();
	
	//call usercollide function
	userCollide();
	if (page == 0){
		start();
		if (keyIsDown(ENTER)){
			if (music.isPlaying() == false){
			music.setVolume(0.3);
			music.play();
		   }
		}
	}
	//if page is one, display instances on page one
	if (page == 1){
		obs1.display();
		obs2.display();
		obs3.display();
		exit1.display();
		if (box !=false){
		fill(0);
		rect(width/2,height/2,600,200);
		}	
		//text appears depends on which object player collides with
		if (text01 == true){
		//calling type function which creates a character by character typing effect
			type('The natural disasters, meteorites,\n\nUFOs, nuclear explosions, doomsday,\n\nsolar storms, wars, and diseases\n\nthat I bought before Christmas...',width/2,310);
		}
		if (text02 == true){
			type('I will call them to delay\n\nthe delivery...\n\nMy heart is beating,\n\nthe entire world has changed...',width/2,310);
		}
		if (text03 == true){
			type('because of your appearance.',width/2,height/2);
		}
	}
	//displays objects on page 2
	if (page == 2){
		heart.display();
		exit2.display();
		if (box !=false){
		fill(0);
		rect(width/2,height/2,800,200);
		}	
		if (text201 == true){
			type("Later, I found that you belong to the gazes\n\nof every eye...So I love you more; and then I\n\nfound that no one could ever possess you,\n\nso I love you no more.",width/2, height/2-45);
		}
	}
	
	//displays objects on page 3
	if (page == 3){
		for (let i = 0; i < stars.length; i++){
    stars[i].display();
		stars[i].move();
  	}
		exit3.display();
		exit3.move3();
		fill(0);
		rect(width/2,height/2,700,150);
		type("I loved you for so long without a reason!\n\nStars...",width/2,height/2-10)
	}
	
	//displays objects on page 4
  if (page == 4){
		puddle.display();
		if (box !=false){
		fill(0);
		rect(width/2,height/2,800,200);
		}	
		if (text401 == true){
			type("It would be a bit scary if it really\n\nwere a pool of clear water.\n\nBut the world is so crowded...\n\nmother.",width/2, height/2-48);
		}
	}
	//console.log(n)
	
	
}