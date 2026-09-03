let player;
let floor;


function setup(){
    new Canvas(600,400);
    background("blue");
    world.gravity.y=10;
    player=new Sprite(0,0,30,30);
    player.color="black";
    

    floor =new Sprite(500,350,2400,20,"static");
    floor.color="yellow";
}