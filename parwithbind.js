module.exports = function(namespace) {
 
		return console.log.bind(console,namespace);
  //return console.log.bind(console, namespace)
}