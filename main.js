canvas=new fabric.Canvas("my_canvas");
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
player_object="";
block_image_object="";

function player_ubtate(){
fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,left:player_x
    });
    canvas.add(player_object);
});
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80'){
    console.log("p and shift pressed together")
    block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}

if(e.shiftKey==true && keyPressed=='77'){
    console.log("m and shift pressed together")
    block_image_width=block_image_width-10;
block_image_height=block_image_height-10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}
if (keyPressed=='38'){
    up();
    console.log("up");
}
if (keyPressed=='40'){
    down();
    console.log("down");
}
if (keyPressed=='37'){
    left();
    console.log("left");
}
if (keyPressed=='39'){
    right();
    console.log("right");
}
if(keyPressed=='67'){
    new_image('cp.png');
    console.log("c")
}
if(keyPressed=='84'){
    new_image('thor_right_hand.png');
    console.log("t")
}
if(keyPressed=='76'){
    new_image('spiderman_body.png');
    console.log("l")
}
if(keyPressed=='84'){
    new_image('trunk.jpg');
    console.log("t")
}
if(keyPressed=='82'){
    new_image('roof.jpg');
    console.log("r")
}
if(keyPressed=='89'){
    new_image('yellow_wall.png');
    console.log("y")
}
if(keyPressed=='68'){
    new_image('hulk_legs.png');
    console.log("d")
}
if(keyPressed=='85'){
    new_image('unique.png');
    console.log("u")
}
if(keyPressed=='67'){
    new_image('cloud.jpg');
    console.log("c")
}}
function up(){
    if (player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block Image Height= "+block_image_height);
        console.log("When UP Arrow is pressed, X = "+ player_x + "Y = "+player_y);
        canvas.remove(player_object);
        player_ubtate();
    }
}
function down(){
    if (player_y<=500){
        player_y=player_y+block_image_height;
        console.log("block Image Height= "+block_image_height);
        console.log("When down Arrow is pressed, X = "+ player_x + "Y = "+player_y);
        canvas.remove(player_object);
        player_ubtate();
    }
}
function left(){
    if (player_x>0){
        player_x=player_x-block_image_height;
        console.log("block Image Width= "+block_image_width);
        console.log("When left Arrow is pressed, X = "+ player_x + "Y = "+player_y);
        canvas.remove(player_object);
        player_ubtate();
    }
}
function right(){
    if (player_x<850){
        player_x=player_x+block_image_height;
        console.log("block Image Width= "+block_image_width);
        console.log("When right Arrow is pressed, X = "+ player_x + "Y = "+player_y);
        canvas.remove(player_object);
        player_ubtate();
    }
}