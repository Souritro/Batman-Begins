class Drop{
    constructor(x,y,radius){
        var options={
            friction:0.02
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius
        //this.upvel=0.7
       //this.downvel=1.6
        World.add(world,this.body)
    }
    display(){
        fill("brown");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }

    //upForce(){
     //   this.body.position.y-=this.upvel
    //}
   // downForce(){
       // this.body.position.y+=this.downvel
    //}
}