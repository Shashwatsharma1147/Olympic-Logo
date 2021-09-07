canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("x=" + mouse_x + "y=" + mouse_y);
    logo(mouse_x, mouse_y);

}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function logo() {

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(250, 210, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(300, 260, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(350, 210, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(400, 260, 40, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(450, 210, 40, 0, 2 * Math.PI);
    ctx.stroke();

}

