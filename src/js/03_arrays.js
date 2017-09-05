console.log('clase2');
/*ARRAYS*/
/*
* Son tipos de datos compuestos porque tiene varios valores
*
*/
console.clear();
var arr1 = [1,2,3, "Hola", false];
console.log("La longitud de arr1 es: " + arr1.length);

//Agregar otro elemento en una posición N
arr1[6] = "soy el 6 elemento";
//Sobreescribir elemento ya asignado
arr1[2] = 10;
//Buscar un elemento en el array
console.log("El 10 esta en la posicion: " + arr1.indexOf(10));
//Con join convertimos el Array en un String
var arr2 = arr1.join('-');
console.log(arr2);

//Con convertimos un String en un Array
var miString = 'fantastico';
var string2Array = miString.split('');
console.log(string2Array);


//Recorrer todo el array e imprimirlo
for (var i = 0; i < arr1.length; i++) {
	//console.log(arr1[i]);
}






//console.log("La longitud de arr1 AL FINAL es: " + arr1.length);