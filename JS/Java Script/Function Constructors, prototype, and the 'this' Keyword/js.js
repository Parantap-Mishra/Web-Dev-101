// Function constructors
function Circle(radius){
	this.radius = radius;
}
Circle.prototype.getArea = 
	function (){
		return Math.PI * Math.pow(this.radius, 2);
	}

var myCircle = new Circle(10); //new Object()
console.log(myCircle.getArea());
var myCircle2 = new Circle(20);
console.log(myCircle2.getArea());

//Object literals and "this"
//var literalCircle = { // new Object
//	radius: 10,
//	getArea: function() {
//		var self = this;
//		console.log(this);
//		var increaseRadius = function(){
//			self.radius = 20;
//		};
//		increaseRadius();
//		return Math.PI * Math.pow(this.radius, 2);
//	}
//};
//console.log(literalCircle.getArea());