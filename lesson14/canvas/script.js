// gameboard class

class GameBoard {
    constructor() {
        this.width = 500
        this.height = 500
    }
    initialise() {
        const canvas = document.createElement('canvas');
        canvas.width = this.width
        canvas.height = this.height
        canvas.id = "game-canvas"

        const body = document.getElementsByTagName('body')[0];
        body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        this.ctx = ctx
    }
}

class Player {
    constructor() {
        this.x = 250
        this.y = 250
        this.radius = 20
        this.speed = 20
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.fillStyle = "red"
        ctx.arc(this.x, this.y, this.radius, 0, (Math.PI/180) * 360)
        ctx.fill()
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }

    moveUp () {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }
}

class Meteor {
    constructor() {
        this.x = 580
        this.y = Math.random() * 500;
        this.radius = (Math.random() * 50) + 20
        this.speed = Math.random() * 20
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x, this.y, this.radius, 0, (Math.PI/180) * 360)
        ctx.fill();
    }
}

class Game {
    constructor() {
        this.gameBoard = new GameBoard();
        this.player = new Player();
        this.meteors = [];
    }
    start() {
        this.gameBoard.initialise();
        window.requestAnimationFrame(this.gameLoop.bind(this))
        this.addListeners(this.player);

        setInterval(() => {
            this.meteors.push(new Meteor)
        }, 2000)
    }
    gameLoop() {
        const ctx = this.gameBoard.ctx;
        ctx.clearRect(0,0, this.gameBoard.width, this.gameBoard.height)
        this.player.draw(ctx)
        this.meteors.forEach((meteor, index) => {
            meteor.x -= meteor.speed
            
            if(this.checkCollision(meteor, this.player)) {
                this.meteors.splice(index, 1)
            }
            
            meteor.draw(ctx)
            if (meteor.x < -80) {
                this.meteors.splice(index, 1)
            }
        })

        window.requestAnimationFrame(this.gameLoop.bind(this))
    }

    checkCollision(meteor, player) {
        const dx = meteor.x - player.x
        const dy = meteor.y - player.y

        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < meteor.radius + player.radius) {
            return true;
        }

    }

    addListeners(player) {
        document.addEventListener('keydown', function(e) {
            switch(e.key) {
                case 'ArrowLeft':
                    player.moveLeft();
                    break;
                case 'ArrowRight':
                    player.moveRight();
                    break;
                case 'ArrowUp':
                    player.moveUp();
                    break;
                case 'ArrowDown':
                    player.moveDown();
                    break;
            }
        })
    }
}

const game = new Game()

game.start();
