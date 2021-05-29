class Snow{
    constructor(x,y){
        this.image = loadImage("snow5.webp");
var options = {
    restitution : 0.8,
    friction : 0.8
}

        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
    World.add(world,this.body)

    }

    display(){
        push();
        
        var pos = this.body.position;
    
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    pop();
    

    }
}