class Sprite{
	constructor(img,x,y){
		this.i=img;
		this.x=x;
		this.y=y;
	}
	mostrar(){
		image(this.i,this.x,this.y,300,250);
	}
	setX(valor){
        this.x+=valor;
    }
}