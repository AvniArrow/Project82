canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
var color="Blue";
var width= 1 ;
var mouseevent="";
lpx = 0;
lpy = 0;
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup (e)
{
    mouseevent="my_mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_positionof_mouse_x = e.clientX - canvas.offsetLeft;
    current_positionof_mouse_y = e.clientY - canvas.offsetTop;
    console.log("mouse_move_enterd")
    if (mouseevent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("Last position of x and y coordinates = ");
  
    // ctx.moveTo(lpx, lpy);
    // ctx.lineTo(current_positionof_mouse_x,current_positionof_mouse_y);
    ctx.arc(current_positionof_mouse_x,current_positionof_mouse_y,40,0,2*Math.PI );
    ctx.stroke();

    }
    
    // lpx=current_positionof_mouse_x;
    // lpy=current_positionof_mouse_y;

}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseevent="mouseDown";
}

