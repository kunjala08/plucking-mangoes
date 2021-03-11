class Mango{
    constructor(x,y,r,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        this.width=width
        this.height=height
        this.image = loadImage("Plucking+mangoes/Plucking mangoes/mango.png");
        World.add(world, this.body)
    }
    display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.width,this.height);
        pop();
        
    }
}