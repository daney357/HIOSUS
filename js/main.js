var	contenido = document.getElementById("binario")
var mostrar = contenido.style.opacity = "0";

var mostrarBinario = function(){
 
 
	contenido.style.opacity = "1";;

}	

var ocultarBinario = function(){
	
	if(contenido.style.opacity == "1"){
		mostrar
	}

}


var inputContraseña = document.getElementById("contraseña")


var hrefInstrucciones = function(){

	if (inputContraseña.value == "BIENVENIDO") {
		window.location.href='../instrucciones.html'
	}

	

}