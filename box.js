class Box
{
    constructor(x,y,width,height)
    {
        var op={
    'friction':1.0,
    'restitution':0.8,
    'density':1.0,
        }

        this.body=Bodies.rectangle(x,y,width,height,op) ; 
        this.width=width;
        this.height=height ;                                 
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
       rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        fill("white")
     
    }
}



































