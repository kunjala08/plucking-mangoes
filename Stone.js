class Stone{
    constructor(x,y,width,height){
        var option={
            isStatic:true,
            restitution:0,
            density:1.2,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height)
        this.image=loadImage("Plucking+mangoes/Plucking mangoes/stone.png")
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
       World.add(world,this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}