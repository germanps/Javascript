
/*Javascript es CaseSensitive*/
console.clear();
var a = "Alumno",
    b = "Alumno";

console.log(a === b);

/*Tipos de datos*/
var c = 5;
console.log(typeof(c));
c = 'Hola';
console.log(typeof(c));
var despedirse = function(){
	console.log("Adios");
	console.log("Esto es de tipo: " + typeof(this));
}; 
despedirse();

/*Variables*/
var nombre = "Germán";
console.log(nombre);
var noDefinida;
console.log(noDefinida);
noDefinida = "Ahora tengo valor!";
console.log(noDefinida);
function saludar(){
	var saludo = "Hola!";
	console.log(saludo);
}

/*Tipos de datos*/
//Primitivos => Un solo valor(Primarios y especiales)
/*
	*Primarios{
		Number => Enteros, decimales, negataivos, etc
	}
	*String
	*Boolean => true or false {
		Falsy values
		-NaN, 0, "",Null(valor inexistente),Undefined(no tiene valor o no lo retorna)
	}

*/

//Compuestos => mas de un valor(arrays y objetos)

