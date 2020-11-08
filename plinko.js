class Plinko
{
    constructor(x,y)
{
        var options=
        {
            isStatic:true
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.radius=10;
        World.add(world,this.body);
    }
    
    display()
    {
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        fill("white");

    }
}
