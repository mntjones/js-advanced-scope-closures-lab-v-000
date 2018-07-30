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
    return fare * rate;
  }
}

function createDriver() {
  let driverId = 0;
  
  return class {
    constructor () {
      this.id = ++driverId;
    }
  }
}