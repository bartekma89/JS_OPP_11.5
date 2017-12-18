function sayHello() {
	console.log(this);
}

var person = {
	name: 'Jan', 
	sayHello: function() {
		console.log('Hello ' + name);
	}
};

