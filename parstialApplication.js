 var slice = Array.prototype.slice
    
    function logger(namespace) {
  var info = logger('INFO:')
    info('this is an info message'+namespace)

    }
    
    module.exports = logger
