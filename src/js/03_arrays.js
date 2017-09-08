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
var miString = 'Fué un dia fantastico';
var string2Array = miString.split('');
console.log(string2Array);
console.log(string2Array[4]);

//Concatenación de arrays
var arr3 = ['a', 'b', 'c', 'd'];
var arr4 = ['e', 'f', 'g', 'h'];
var arraConcat = arr3.concat(arr4);
console.log(arraConcat);

//Añadir elementos al INICIO
arr3.unshift('Al', 'Principio');
console.log(arr3);

//Añadir elementos al FINAL
arr4.push('Al', 'Final');
console.log(arr4);

//Quitar elementos de PRINCIPIO (te lo retorna)
var newArray = [1, 2, 3, 4, 5];

var elemento1 = newArray.shift()
console.log(elemento1);
console.log(newArray);

//Quitar elementos del Final (te lo retorna)
var elemento2 = newArray.pop();
console.log(elemento2);
console.log(newArray);

//Crear otro array partiendo de otro array
var newArray2 = [1, 2, 3, 4, 5];
var newArray3 = newArray2.slice(1, 3);
console.log(newArray3);

//Modificar Arrays(quitar y meter elementos en cualquier sitio);
var newArray3 = [1, 2, 3, 4, 5];
var newArray4 = newArray3.splice(1, 2);
console.log(newArray4);
console.log(newArray3);

var newArray5 = [1, 2, 3, 4, 5];
console.log(newArray5.splice(1, 4));
console.log(newArray5);


/*****Ejercicio*****/
var numeros = [1, 2, 3, 4, 5];
//eliminar el 3
console.log(numeros.splice(2, 1));
console.log(numeros);
//agregar elemento 
var numeros2 = [1, 2, 3, 4, 5];
numeros2.splice(3,0,"Nuevo elemento", "Otro más");//con el 0 no elimina nada
console.log(numeros2);

//Recorrer todo el array e imprimirlo
for (var i = 0; i < arr1.length; i++) {
	//console.log(arr1[i]); 
}






//console.log("La longitud de arr1 AL FINAL es: " + arr1.length);