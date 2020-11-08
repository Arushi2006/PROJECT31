class Division
{
    constructor(x,y,width,height)
    {
        var options=
        {
            isStatic:true
        }

        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);

        for(var r1=40;r1<=width;r1=r1+50)
{
  plinko.push(new Plinko(r1,75));
}

for(var r2=60;r2<=width-10;r2=r2+50)
{
  plinko.push(new Plinko(r2,75));
}

for(var r3=80;r3<=width-10;r3=r3+50)
{
  plinko.push(new Plinko(r3,175));
}

for(var r4=100;r4<=width-10;r4=r4+50)
{
  plinko.push(new Plinko(r3,275));
}

for(var r4=120;r4<=width-10;r4=r4+50)
{
  plinko.push=(new Plinko(r4,375)); 
}

    }
}