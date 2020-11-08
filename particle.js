class Particle
{
    constructor(x,y,radius)
    {
        var options=
    {
        restitution:0.4
    }
    this.radius=radius;

    this.body=Bodies.circle(x,y,this.radius,options);
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    }
    display()
    {
        for(var k=0;k<=width;k=k+80)
    {  
       division.push(new division(k,height-300/2,10,300));
    }
        if(frameCount%60===0)
        {
            particle.push(new Particle(random(this.radius/2-10,radius/2+10),10,10));
        }


    }
}