(function(global){
	var ajaxUtiles = {};
	
	//returns an HTTP request object
	function getRequestObject(){
		if (window.XMLHttpRequest){
			return(new XMLHttpRequest());
		}
		else if (window.ActiveXObject){
			//For very old IE browsers
			return(new ActiveXObject("Microsoft.XMLHTTp"))
		}
		else{
			global.alert("Ajax is not supported")
			return(null)
		}
	}
	
	//makes an AJAX GET request to 'requestUrl'
	ajaxUtiles.sendGetRequest = 
		function(requestUrl, responseHandler){
			var request = getRequestObject();
			request.onreadystatechange = 
			function (){
				handleResponse(request, responseHandler);
			};
			request.open("GET", requestUrl, true);
			request.send(null);//for Post only
		};
		//Only calls user provided 'responseHandler'
		//function if response is ready
		//and not an error
		function handleResponse(request, responseHandler){
			if ((request.readyState == 4) && 
			(request.status == 200)){
				responseHandler(request);
			}
		}
		
		//Expose utility to the global object
		global.$ajaxUtiles = ajaxUtiles;
})(window);