document.addEventListener("DOMContentLoaded",
	function(event){
		function sayHello(event){
			this.textContent = "Said it";
			var name = document.getElementById("name").value;
			var message = "<h2>Hello " + name + "!</h2>";
			///Second Way
			//document.getElementById("content").textContent
			//= message;
			document.getElementById("content").innerHTML
			= message;
			if (name.toLowerCase() === "student"){
				var title = document.querySelector("h1")
				.textContent;
				title = "JavaScripyt, I'm Loving it!";
				var title = document.querySelector("h1")
				.textContent = title;
			}
			if (name.toLowerCase() === "kuku"){
				message = "<h2>Hello "+name+ " the greatest coder in the world!!</h2>"
				document.getElementById("content").innerHTML
				= message;
			}
			if (name.toLowerCase() === "parantap"){
				message = "<h2>Hello "+name+ ", the greatest coder in the world!!</h2>"
				document.getElementById("content").innerHTML
				= message;
			}
		}
		//Unobstructive event binding
		document.querySelector("button").addEventListener
		("click", sayHello);

		///Second way
		//document.querySelector("button").onclick = sayHello;
		document.querySelector("body").addEventListener
		("mousemove",
			function (event){
				if (event.shiftKey === true){
					console.log("x:" + event.clientX);
					console.log("y:" + event.clientY);
				}
			}
		);
	}
		
);





