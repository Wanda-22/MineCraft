var canvas=new fabric.Canvas('myCanvas');

playerx=10;
playery=10;

blockh=30;
blockw=30;

var player="";
var block="";

function playeri() {
    fabric.Image.fromURL("player.png", function(Img){
        player=Img;
        player.scaleToWidth(150);
        player.scaleToHeight(150);
        player.set({
            top:playery,
            left:playerx
        });
        canvas.add(player);
    });
}

function blocki(getimage) {
    fabric.Image.fromURL(getimage, function(Img){
        block=Img;
        block.scaleToWidth(blockw);
        block.scaleToHeight(blockh);
        block.set({
            top:playery,
            left:playerx
        });
        canvas.add(block);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    z=e.keyCode;
    console.log(z);
    if (e.shiftKey == true && z=='80') {
        console.log("p and shift pressed together");
        blockw=blockw+10;
        blockh=blockh+10;
        document.getElementById("w").innerHTML=blockw;
        document.getElementById("h").innerHTML=blockh;
    }
    if (e.shiftKey == true && z=='77') {
        console.log("m and shift pressed together");
        blockw=blockw-10;
        blockh=blockh-10;
        document.getElementById("w").innerHTML=blockw;
        document.getElementById("h").innerHTML=blockh;
    }
    if(z=='37'){
        console.log("left arrow is pressed");
        Left();
    }

    if(z=='38'){
        console.log("up arrow is pressed");
        Up();
    } 

    if(z=='39'){
        console.log("right arrow is pressed");
        Right();
    }

    if(z=='40'){
        console.log("down arrow is pressed");
        Down();
    }

  if(z=='87'){
        console.log("w is pressed");
        blocki('wall.jpg');
    }

    if(z=='71'){
        console.log("g is pressed");
        blocki('ground.png');
    }

    if(z=='76'){
        console.log("l is pressed");
        blocki('light_green.png');
    }

    if(z=='84'){
        console.log("t is pressed");
        blocki('trunk.jpg');
    }

    if(z=='82'){
        console.log("r is pressed");
        blocki('roof.jpg');
    }

    if(z=='89'){
        console.log("y is pressed");
        blocki('yellow_wall.png');
    }

    if(z=='68'){
        console.log("d is pressed");
        blocki('dark_green.png');
    }

    if(z=='85'){
        console.log("u is pressed");
        blocki('unique.png');
    }

    if(z=='67'){
        console.log("c is pressed");
        blocki('cloud.jpg');
    }
}

function Left() {
    if (playerx>=0) {
        playerx=playerx-blockw;
        canvas.remove(player);
        playeri();
    }
}

function Right() {
    if (playerx<=700) {
        playerx=playerx+blockw;
        canvas.remove(player);
        playeri();
    }
}

function Up() {
    if (playery>=0) {
        playery=playery-blockh;
        canvas.remove(player);
        playeri();
    }
}

function Down() {
    if (playery<=500) {
        playery=playery+blockh;
        canvas.remove(player);
        playeri();
    }
}