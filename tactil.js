$( function (){
	var i=$("#imagen");

	function evoluciona(){
		if(i.attr == "charmander.png"){
			i.attr('src', 'charmeleon.png');
		}
		else{
			i.attr('src', 'charizard.jpeg');
		}
		
	}

	function involuciona(){
		if(i.attr == "charmeleon.png"){
			i.attr('src', 'charmander.png');
		}
		else{
			i.attr('src', 'charmeleon.png');
		}
		
	}

	i.on('swipeRight', evoluciona);
	i.on('swipeLeft', involuciona);
});