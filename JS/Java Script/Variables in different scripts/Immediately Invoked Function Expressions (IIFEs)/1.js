(function (window) {
	var ParantapGreeter = {};
	var greeting = "Hello "
	ParantapGreeter.name = "Parantap";
	ParantapGreeter.sayHello= function(){
		console.log(greeting + ParantapGreeter.name);
	}
	window.ParantapGreeter = ParantapGreeter;
})(window);