var promise = new Promise(function(fulfill,reject){



	fulfill("I FIRED");
	reject(new Error("I DID NOT FIRE"));


}).catch(console.log)

var promise = new Promise.resolve("resolves").then(console.log);
//var promise = new Promise.reject("rejected").catch(console.log);



    function onReject (error) {
      // Your solution here
      console.log(error.message);
    }
    
    // Your solution here
