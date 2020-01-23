const myRover = {
    // position is an array of 2 elements -> first element is x and the second element is y
    position: [0,0],
    direction: 'N',
    roverDirections: ['N', 'E', 'S', 'W'],
    theCommands: ['f', 'b', 'l', 'r']
  };
  
  const theCommands = prompt ("Insert the instruction: ");
  
  // function definition:
  function commandsArray(myRover){
    for (let i=0; i<theCommands.length; i++){
      if (theCommands[i] === "f") {
        goForward(myRover);
      } else if (theCommands[i] === "b"){
        goBackward(myRover);
      } else if (theCommands[i] === "l"){
        turnLeft(myRover);
      } else if (theCommands[i] ==='r'){
        turnRight(myRover);
      }
    }
    console.log(`New Rover Position: [${myRover.position[0]},  ${myRover.position[1]}]`);
    console.log(`New Rover Direction: ${myRover.direction}`);
  }
  
  // invoke a function:
  commandsArray(myRover);
  
  // function definition:
  function goForward(myRover) {
    switch(myRover.direction) {
      case 'N':
        myRover.position[0]++;
        break;
      case 'E':
        myRover.position[1]++;
        break;
      case 'S':
        myRover.position[0]--;
        break;
      case 'W':
        myRover.position[1]--;
        break;
    }
  }
  
  // invoke a function:
  goForward(myRover);
  
  
  function goBackward(myRover) {
    switch(myRover.direction) {
      case 'N':
        myRover.position[0]--;
        break;
      case 'E':
        myRover.position[1]--;
        break;
      case 'S':
        myRover.position[0]++;
        break;
      case 'W':
        myRover.position[1]++;
        break;
    }
    console.log(`New Rover Position: [${myRover.position[0]},  ${myRover.position[1]}]`);
    console.log(`New Rover Direction: ${myRover.direction}`);
  }
  
  goBackward(myRover);
  
  
  function turnLeft(myRover){
    switch (myRover.direction) {
      case 'N':
        myRover.direction = 'W';
      break;
      case 'E':
        myRover.direction = 'N';
      break;
      case 'S':
        myRover.direction = 'E';
      break;
      case 'W':
        myRover.direction = 'S';
      break;
          }
      console.log(`New Rover Position: [${myRover.position[0]},  ${myRover.position[1]}]`);
      console.log(`New Rover Direction: ${myRover.direction}`);
  }
  
  turnLeft(myRover);
  
  
  function turnRight(myRover){
    switch (myRover.direction) {
      case 'N':
        myRover.direction = 'E';
      break;
      case 'E':
        myRover.direction = 'S';
      break;
      case 'S':
        myRover.direction = 'W';
      break;
      case 'W':
        myRover.direction = 'N';
      break;
    }
    console.log(`New Rover Position: [${myRover.position[0]},  ${myRover.position[1]}]`);
    console.log(`New Rover Direction: ${myRover.direction}`);
  }
  
  turnRight(myRover);
  