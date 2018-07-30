function produceDrivingRange(blocks) {
  return function(starting, ending) {
    const distance = Math.abs(parseInt(starting)-parseInt(ending));
    
    if (distance > blocks) {
      return `${distance-blocks} blocks out of range`;
    }
    else {
      return `within range by ${blocks-distance}`;
    }
  }
}

function produceTipCalculator(rate) {
  return function(fare) {
    return 
  }
}

function createDriver() {
  
}