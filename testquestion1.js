

function setup(){
    new Canvas(600,400);
    background("blue");
    world.gravity.y=10;
    let player=new Sprite(300,100,30,30,"dynamic");
    player.color="red";
    
    let floor=new Sprite(300,350,2400,20,"static");
    floor.color="green";

}