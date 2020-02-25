class Rover {
    constructor(position, direction) {
        this.position = position
        this.direction = direction
        this.roverDirections = ['N', 'E', 'S', 'W']
    }
    goForward() {
        switch (this.direction) {
            case 'N':
                this.position[0]++;
                break;
            case 'E':
                this.position[1]++;
                break;
            case 'S':
                this.position[0]--;
                break;
            case 'W':
                this.position[1]--;
                break;
        }
        console.log(`New Rover Position: [${this.position[0]},  ${this.position[1]}]`);
        console.log(`New Rover Direction: ${this.direction}`);

    }

    turnLeft() {
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'E':
                this.direction = 'N';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'W':
                this.direction = 'S';
                break;
        }
        console.log(`New Rover Position: [${this.position[0]},  ${this.position[1]}]`);
        console.log(`New Rover Direction: ${this.direction}`);
    }

    turnRight() {
        switch (this.direction) {
            case 'N':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'N';
                break;
        }
        console.log(`New Rover Position: [${this.position[0]},  ${this.position[1]}]`);
        console.log(`New Rover Direction: ${this.direction}`);
    }
}

class Curiosity extends Rover {
    constructor() {
        super([9,1], 'N')
        this.batteryLevel = "high"
    }
    analyseRocks() {
        console.log(`analysing rocks at position ${this.position}`)
    }
}

const myRover = new Rover([3,5], 'N');
const secondRover = new Rover([6,7], 'S');
//const brokenRover = new Rover();

const curiosity = new Curiosity([7,7], 'N')

curiosity.goForward();
curiosity.analyseRocks();

// brokenRover.goForward();

myRover.turnRight();
myRover.goForward();