 var promise = new Promise(function (fulfill, reject) {
       

       setTimeout(function(){reject(new Error('REJECTED!'));}, 300)
    }).then(null,onReject);
    
    


    function onReject (error) {
      // Your solution here
      console.log(error.message);
    }
    
    // Your solution here
