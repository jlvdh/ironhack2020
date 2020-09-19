// gameboard

class GameBoard {
    constructor() {
        this.width = 500
        this.height = 500
    }
    initialise() {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.width;
        canvas.id = "gameboard";
        
        const body = document.getElementsByTagName('body')[0];
        body.appendChild(canvas);
        this.setCtx(canvas)
    }

    setCtx(canvas) {
        this.ctx = canvas.getContext('2d');
    }

}

//Player
class Player {
    constructor(x, y, speed) {
        this.x = x
        this.y = y
        this.speed = speed;
    }
    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 20, 0, (Math.PI/180)*360);
        ctx.fill()
        ctx.closePath()
    }

    moveLeft() {
        this.x = this.x - this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y = this.y - this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

}

class Enemy {
    constructor(x, y, speed) {
        this.x = x
        this.y = y
        this.speed = speed
        this.radius = Math.random() * 100
    }

    draw(ctx) {
        ctx.fillStyle = "blue";
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, (Math.PI/180)*360)
        ctx.fill()
        ctx.closePath()
    }

    move() {
        this.x -= this.speed;
    }
}

class Game {
    constructor() {
        this.player = new Player(250, 250, 30);
        this.gameBoard = new GameBoard();
        this.enemies = [];
        this.score = 0;
    }

    start() {
        this.gameBoard.initialise();
        this.addListeners()
        this.gameLoopId = window.requestAnimationFrame(this.gameLoop);
        window.setInterval(this.addEnemy.bind(this), 2000)
    }

    addEnemy() {
        const randomY = Math.random() * this.gameBoard.width
        const randomSpeed = Math.random() * 20;
        const enemy = new Enemy(this.gameBoard.width + 50, randomY, randomSpeed);
        this.enemies.push(enemy);
    }

    gameLoop = () => {
        const ctx = this.gameBoard.ctx;

        ctx.clearRect(0, 0, this.gameBoard.width, this.gameBoard.height)

        this.enemies.forEach(enemy => {
            enemy.draw(ctx)
            enemy.move()
        })

        this.player.draw(ctx);

        this.displayScore(ctx);
        this.collusionDetection(this.enemies)

        window.requestAnimationFrame(this.gameLoop.bind(this))
    }

    collusionDetection(enemies) {
        enemies.forEach((enemy, index) => {
            var dx = enemy.x - this.player.x;
            var dy = enemy.y - this.player.y;
            
            var distance = Math.sqrt(dx * dx + dy * dy);     

            if (distance < enemy.radius + 20 ) { // player radius
                enemies.splice(index, 1)
                this.score++
            }
            
        })
    }

    displayScore(ctx) {
        ctx.fillText(this.score, 10, 10);
    }

    addListeners() {
        const body = document.getElementsByTagName('body')[0];

        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    this.player.moveLeft();
                    break;
                case 'ArrowRight':
                    this.player.moveRight();
                    break;
                case 'ArrowUp':
                    this.player.moveUp();
                    break;
                case 'ArrowDown':
                    this.player.moveDown();
                    break;
            }
        })
    }
}

const game = new Game();

game.start();