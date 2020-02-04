const canvas = document.getElementById('our-canvas');

const ctx = canvas.getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 300, 300)
gradient.addColorStop(0, 'yellow')
gradient.addColorStop(0.5, 'orange')
gradient.addColorStop(1, 'red')
ctx.globalAlpha = 0.5
ctx.fillStyle = gradient
ctx.fillRect(0, 0, 600, 600);

ctx.fillStyle = "rgba(200, 100, 100, 0.5)"
ctx.fillRect(50, 50, 70, 70)
ctx.strokeRect(100, 200, 40, 40);

ctx.beginPath()

ctx.strokeStyle = "blue"

ctx.moveTo(130, 50)

ctx.lineWidth = 10

ctx.lineTo(130, 120)

ctx.lineTo(300, 120)

ctx.arcTo(400, 120, 400, 300, 75);

ctx.stroke();

ctx.closePath();

ctx.strokeStyle = "red"

ctx.beginPath();
ctx.moveTo(300, 120)

ctx.lineTo(400, 400);

ctx.stroke();

ctx.closePath()

ctx.beginPath();

ctx.arc(200, 200, 80, (Math.PI/180) * 0, (Math.PI/180)* 360)

ctx.stroke();

ctx.fill();

const img = new Image();

img.src = "Football_Goals_B.png";

img.onload = function() {
    ctx.drawImage(img, 150, 150, 100, 100);
}

ctx.fillStyle = "black"
ctx.font = "48px Arial"


const clearButton = document.getElementById('clear-button')

clearButton.addEventListener('click', function() {
    ctx.fillText('Copyright Jorg van der Ham', 40, 375, 450);
    // ctx.clearRect(0,0, 500, 500);
})


