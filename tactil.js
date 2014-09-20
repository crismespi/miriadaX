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

	i.on('swipeRight', evoluciona);
	i.on('swipeLeft', involuciona);
});