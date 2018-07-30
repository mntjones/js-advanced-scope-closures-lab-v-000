function produceDrivingRange(blocks) {
  return function(starting, ending) {
    const distance = Math.abs(starting-ending);
    
    if (distance > blocks) {
    return `${distance-blocks} blocks out of range`;
   }
    else {return `within range by ${distance}`;}
    
  }
}

function produceTipCalculator() {
  
}

function createDriver() {
  
}