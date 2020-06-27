class Target{
    constructor(x,y){
        var options = {
            friction : 0.5
        }
        this.body = Bodies.rectangle(x,y,80,80)// options)
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(this.x/10000,this.y/10000,80,80);
        pop();
       // console.log(pos.x);
    }
}