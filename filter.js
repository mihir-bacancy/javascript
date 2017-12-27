

 function getShortMessages(messages) {
 		var array =  messages.filter(function(element){ console.log(element.message.length)});  

 		return array;  
    }
    
    module.exports = getShortMessages



    /*

module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }



    */
