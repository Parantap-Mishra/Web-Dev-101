function sayHello(){
	var name = document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>";
	///Second Way
	//document.getElementById("content").textContent
	//= message;
	document.getElementById("content").innerHTML
	= message;
	if (name.toLowerCase() === "student"){
		var title = "JavaScripyt, I'm Loving it!";
		document.getElementById("title")
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



function sayhello(){
	var name = document.getElementById("Name").value;
	var message = "<h2>Hello " + name + "!</h2>";
	///Second Way
	//document.getElementById("content").textContent
	//= message;
	document.getElementById("Content").innerHTML
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
		document.getElementById("Content").innerHTML
		= message;
	}
	if (name.toLowerCase() === "parantap"){
		message = "<h2>Hello "+name+ ", the greatest coder in the world!!</h2>"
		document.getElementById("Content").innerHTML
		= message;
	}
}





















