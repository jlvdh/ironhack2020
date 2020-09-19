const canvas = document.getElementById('our-canvas');
const ctx = canvas.getContext("2d");

function drawArc(ctx, x) {
    ctx.beginPath();
    ctx.arc(x, 50, 10, 0, (Math.PI/180)*360)
    ctx.fill()
}


let arcX = 10

// setInterval(function() {
//     ctx.clearRect(0,0, 500, 500)
//     drawArc(ctx, arcX);
//     arcX += 1
// }, 100)

function animationLoop() {
    ctx.clearRect(0,0, 500, 500)
    drawArc(ctx, arcX);
    arcX += 1
    window.requestAnimationFrame(animationLoop)
}

window.requestAnimationFrame(animationLoop);

