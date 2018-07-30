function produceDrivingRange(blocks) {
  return function(starting, ending) {
    const distance = Math.abs(starting-ending);
    if (distance > blocks) {
    return `${distance} blocks out of range`;
  }
  else {return `within range by ${distance} blocks`;}
    
  }
}

function produceTipCalculator() {
  
}

function createDriver() {
  
}