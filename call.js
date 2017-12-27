 var args =  {quack: true}



 function duckCount(args) {
     
     var num=0,i=0;
     if(args.hasOwnProperty('quack'))
     {
     	num++;
     	
     }
     // i++;
     console.log(num);
	return num;

    }
 


    module.exports = duckCount



 function duckCount() 
 {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
      	console.log(obj);
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }

    console.log(duckCount);
    
    module.exports = duckCount


