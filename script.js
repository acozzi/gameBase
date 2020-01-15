var img; // base 600x500
var player1;
function preload(){
	img=loadImage('2dChar.png');
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	player1= new Sprite(img,50,50);
}
function draw() {
	background(100);
	player1.mostrar();
    player1.setX(5);	
}
