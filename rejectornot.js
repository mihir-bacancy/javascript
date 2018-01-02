var promise = new Promise(function(fulfill,reject){



	fulfill("I FIRED");
	reject(new Error("I DID NOT FIRE"));


}).then(console.log,onReject);


    function onReject (error) {
      // Your solution here
      console.log(error.message);
    }
    
    // Your solution here
