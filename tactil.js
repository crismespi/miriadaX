$( function (){
	var imagen=$("#imagen");
	
	function evoluciona(){
		var url = imagen.attr("src");
		if(url == "charmander.png"){
			imagen.attr('src', 'charmeleon.png');
		}
		else{
			imagen.attr('src', 'charizard.png');
		}
		
	}

	function involuciona(){
		var url = imagen.attr("src");
		if(url == "charmeleon.png"){
			imagen.attr('src', 'charmander.png');
		}
		else{
			imagen.attr('src', 'charmeleon.png');
		}
		
	}

	imagen.on('swipeRight', evoluciona);
	imagen.on('swipeLeft', involuciona);
	imagen.on('click', evoluciona);
});