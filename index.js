function produceDrivingRange(blocks) {
  return function(starting, ending) {
    const distance = Math.abs(starting-ending);
    if (distance > blocks) {
    return `${distance} blocks out of range.`;
  }
  else {return true;}
    
  }
}

function produceTipCalculator() {
  
}

function createDriver() {
  
}