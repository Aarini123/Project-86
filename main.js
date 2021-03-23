var canvas= new fabric.Canvas("Canvas");
var superhero_X=10;
var superhero_Y=10;
block_imgWidth=50;
block_imgHeight=50;
superhero_object="";
block_object="";

function Superhero_Update() {
    fabric.Image.fromURL("player.png",function(Img){
        superhero_object=Img;
        superhero_object.scaleToWidth(150);
        superhero_object.scaleToHeight(150);
        superhero_object.set({top:superhero_Y,
left:superhero_X});
canvas.add(superhero_object);
    });
}
function block_Update(newImg) {
    fabric.Image.fromURL(newImg,function (Img){
block_object=Img;
block_object.scaleToWidth(block_imgWidth);
block_object.scaleToHeight(block_imgHeight);
block_object.set({top:superhero_Y,
left:superhero_X});
canvas.add(block_object);
    });
}

window.addEventListener("keydown",Down_key);

function Down_key(e) {
    keypressed=e.keyCode;
    if (e.shiftKey && keypressed=="80"){
     console.log("p and shift keys pressed");
block_imgWidth= block_imgWidth + 10;
block_imgHeight= block_imgHeight + 10;
document.getElementById("width").innerHTML=block_imgWidth;
document.getElementById("height").innerHTML=block_imgHeight;
    } 
    if (e.shiftKey && keypressed=="77"){
        console.log("m and shift keys pressed");
        block_imgHeight= block_imgHeight- 10;
        block_imgWidth = block_imgWidth-  10;
        document.getElementById("width").innerHTML=block_imgHeight;
        document.getElementById("height").innerHTML=block_imgWidth;
    } 
    if(keypressed=="65"){
    console.log("a is pressed");
    block_Update("captain_america_left_hand.png");
}
    if(keypressed=="66"){
        console.log("b is pressed");
        block_Update("hulk_face.png");
        }

        if(keypressed=="67"){
            console.log("c is pressed");
            block_Update("hulk_left_hand.png");
            }

            if(keypressed=="68"){
                console.log("d is pressed");
                block_Update("hulk_legs.png");
                }

                if(keypressed=="69"){
                    console.log("e is pressed");
                    block_Update("hulk_right_hand.png");
                    }

                    if(keypressed=="70"){
                        console.log("f is pressed");
                        block_Update("hulkd_body.png");
                        }

                        if(keypressed=="71"){
                            console.log("g is pressed");
                            block_Update("ironman_body.png");
                            }

                            if(keypressed=="72"){
                                console.log("h is pressed");
                                block_Update("ironman_face.png");
                                }

                                if(keypressed=="73"){
                                    console.log("i is pressed");
                                    block_Update("ironman_left_hand.png");
                                    }

                                    if(keypressed=="74"){
                                        console.log("j is pressed");
                                        block_Update("ironman_right_hand.png");
                                        }

                                        if(keypressed=="75"){
                                            console.log("k is pressed");
                                            block_Update("spiderman_body.png");
                                            }

                                            if(keypressed=="76"){
                                                console.log("l is pressed");
                                                block_Update("spiderman_face.png");
                                                }

                                                if(keypressed=="88"){
                                                    console.log("x is pressed");
                                                    block_Update("spiderman_left_hand.png");
                                                    }
                                                    if(keypressed=="78"){
                                                        console.log("n is pressed");
                                                        block_Update("spiderman_right_hand.png");
                                                        }

                                                        if(keypressed=="79"){
                                                            console.log("o is pressed");
                                                            block_Update("thor_face.png");
                                                            }

                                                            if(keypressed=="81"){
                                                                console.log("q is pressed");
                                                                block_Update("thor_left_hand.png");
                                                                }

                                                                if(keypressed=="82"){
                                                                    console.log("r is pressed");
                                                                    block_Update("thor_right_hand.png");
                                                                    }





   if(keypressed=="38"){
       Up();
   }   
   
   if(keypressed=="40"){
    down();
} 
if(keypressed=="39"){
    right();
} 
if(keypressed=="37"){
    left();
}    
}