var slice = Array.prototype.slice
    
function logger(namespace) {
  // SOLUTION GOES HERE
  console.log([namespace].concat(slice.call(arguments)))
  return function(){
      
    console.log.apply(console,[namespace].concat(slice.call(arguments)) );
  }
}

module.exports = logger
 