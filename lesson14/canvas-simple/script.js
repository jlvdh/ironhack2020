const canvas = document.getElementById('our-canvas')

const ctx = canvas.getContext('2d');

const ctx2 = canvas.getContext('2d')

function drawArc(ctx, x, y) {
    ctx.beginPath()
    ctx.arc(x, y, 40, 0, (Math.PI/180) * 360)
    ctx.fill()
}

let xPos = 50;
let yPos = 50;
let speed = 10

function animationLoop(timestamp) {
    ctx.clearRect(0,0, 500, 500)
    drawArc(ctx, xPos, yPos)
    ctx.fillRect(50, 50, 100, 100)
    drawArc(ctx, 100, 100);
    xPos += speed
    yPos += speed
    requestAnimationFrame(animationLoop)
}

requestAnimationFrame(animationLoop);

const ourButton = document.getElementById('return-ball-button')

ourButton.addEventListener('click', function() {
    speed = speed * -1
})
