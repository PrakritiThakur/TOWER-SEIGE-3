  
class Box extends BaseClass {
  constructor(x, y, width, height){

    super(x,y,width,height);
    this.visibility = 225;
  }
 
  score(){
    if(this.visibility < 0 && this.visibility > - 105){
      score++;
    }
  }
  display(){
    if(this.body.speed < 3){
    
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);

      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      pop();
   }
  }
}
