const myRover = {
    // position is an array of 2 elements -> first element is x and the second element is y
    position: [0, 0],
    direction: 'N',
    roverDirections: ['N', 'E', 'S', 'W'],
    theCommands: ['f', 'b', 'l', 'r'],
    goForward: function () {
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


    },
    turnLeft: function () {
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

    },
    turnRight: function () {
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
};

myRover.turnRight();
myRover.goForward();