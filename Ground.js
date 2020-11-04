class Ground {
    constructor(x,y,width,height){
        var option = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png")
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        fill("green");
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();

    }
}