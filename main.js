var canvas= new fabric.Canvas("Canvas");
var superhero_X=10;
var superhero_Y=10;
block_imgWidth=50;
block_imgHeight=50;
superhero_object="";
block_object="";

function Superhero_Update() {
    fabric.Image.fromURL("",function(Img){
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
block_object.set({top:player_Y,
left:player_X});
canvas.add(block_object);
    });
}