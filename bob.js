class Bob{
    constructor(x,y){
        var options={
            'isStatic': true
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill('pink');
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}