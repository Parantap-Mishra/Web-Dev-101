(function(window){
	var RamGreeter = {}
	var greeting = "Hi "
	RamGreeter.name = "Ram";
	RamGreeter.sayHi = function(){
		console.log(greeting + RamGreeter.name);
	}
	window.RamGreeter = RamGreeter;
})(window);