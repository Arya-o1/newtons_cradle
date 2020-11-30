class Chain{
    constructor(a,b,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : a,
            bodyB : b,
            stifness:0.05,
            length:200,
            pointB:{x:this.offsetX,y:this.offsetY}
        }

        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var bdA = this.chain.bodyA.position;
        var bdB = this.chain.bodyB.position;
        
        strokeWeight(4);
        line(bdA.x,bdA.y,bdB.x + this.offsetX,bdB.y + this.offsetY);
    }
}