class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var pos=this.body.position
    if(pos.x>220 && this.body.speed>10){
      var position=[pos.x,pos.y]
      console.log(position)
      this.trajectory.push(position)
      console.log(this.trajectory)
    }
    
    for(var i = 0; i<this.trajectory.length;i++){
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])
    }
  }
}
