function setup(){
    new Canvas(600,400);
    background("blue");
    world.gravity.y=10;
    let player=new Sprite(300,200,30,30);
    

    let floor=new Sprite(500,350,2400,20,"static");
}