class Rover {
    constructor(position, direction) {
        this.position = position;
        this.direction = direction
        this.roverDirections = ['N', 'E', 'S', 'W']
        this.theCommands = ['f', 'b', 'l', 'r']   
    }
    // position is an array of 2 elements -> first element is x and the second element is y
    turnLeft () {
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
    turnRight () {
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
    goForward () {
        switch(this.direction) {
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
    }
  };

  class Spirit extends Rover {
      constructor(position, direction) {
        super(position, direction)
      }

      analyseRock() {
          console.log(`analysing rock at position ${this.position}`)
      }
  }

  class Curiosity extends Spirit {
      constructor(position, direction) {
          super(position, direction)
          this.armExtended = false
      }

      extendArm() {
          this.armExtended = true
      }

      retractArm() {
          this.armExtended = false
      }

      armStatus() {
          console.log(`armstatus = ${this.armExtended}`)
      }
  }

  const myRover = new Rover([0,1], 'N')

  const secondRover = new Rover([9,9], 'E')

  const mySpirit = new Spirit([11, 14], 'S');

  const curiosity = new Curiosity([50,61], 'N')

  curiosity.armStatus();

  curiosity.extendArm()

  curiosity.armStatus();

  mySpirit.turnLeft();
  mySpirit.goForward();

  mySpirit.analyseRock();

  console.log(mySpirit.roverDirections);

  secondRover.turnLeft();
  secondRover.goForward();
  myRover.turnRight();
  myRover.goForward();