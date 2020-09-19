let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')

ctx.fillStyle = "red"
ctx.fillRect(100, 100, 30, 40);

ctx.strokeRect(110, 110, 50, 50);

ctx.clearRect(115, 115, 50, 50);

ctx.beginPath();

ctx.moveTo(50, 50);
// draw the line that has final coordinates x=250, y=50
ctx.lineTo(250, 50);

ctx.stroke();

ctx.strokeStyle = "blue"
// ctx.moveTo(250, 50)
ctx.lineTo(75,75)

ctx.closePath()

ctx.stroke();

ctx.beginPath()

ctx.globalAlpha = 0.5;

ctx.arc(125, 125, 40, (Math.PI/180) * 0, (Math.PI/180)*360), true;

ctx.stroke();

const gradient = ctx.createLinearGradient(0,0,70,0)

gradient.addColorStop(0, 'blue')
gradient.addColorStop(0.5, 'yellow')
gradient.addColorStop(1, 'red')

ctx.fillStyle = gradient;

// ctx.fillRect(0, 0, 400, 400);
ctx.strokeStyle = "red"
ctx.strokeRect(50, 50, 100, 100)
// ctx.fillRect(50, 50, 100, 100);

ctx.clearRect(0, 0, 400, 400)

ctx.lineWidth = 30
ctx.lineCap = 'round'


ctx.beginPath()


ctx.moveTo(0,0)

ctx.lineTo(50,50)

ctx.arcTo(100, 50, 100, 180, 6)

ctx.arcTo(100, 270, 50, 270, 50)


ctx.stroke()

const image = new Image()

image.src = 'Block_B_02.png'
image.onload = function() {
    const pattern = ctx.createPattern(image, 'repeat')

    // ctx.fillStyle = pattern;
    
    // ctx.fillRect(50, 50, 200, 200);   
    
    ctx.drawImage(image, 0, 0, 600, 600)
}

ctx.fillStyle = "black"
ctx.font = "48px Arial"
ctx.fillText('hello mr Wiggles', 50, 50);



