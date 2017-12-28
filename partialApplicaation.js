var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    
    //var str = "hello world";
    
    //console.log([namespace].concat(str.slice()));
    //console.log([namespace].concat(slice.call("Hello","world")));

  //	console.log(arguments);
  		//console.log(slice.call(arguments));
  		//console.log([namespace].concat(slice.call(arguments)));

    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger