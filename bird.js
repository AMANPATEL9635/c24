class Bird {

constructor(x,y){
    var options ={
        restitution: 1.0
    }
this.width=50
this.height=50

    this.body = Bodies.rectangle(x,y,50,50, options);
    World.add(world,this.body);



}
display(){
    this.body.position.x=mouseX
    this.body.position.y=mouseY
    push()
   
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    rectMode(CENTER);
    fill('red')
    stroke("pink")
    strokeWeight(3)
    rect(0,0,this.width,this.height);
    pop()
}
}