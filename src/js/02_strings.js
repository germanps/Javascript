console.log('clase2');
/*
* .lenght() => retorna la longitud
* .indexof() => Indice de un elemento
* .substring() => Crea una cadena con cierta fraccion de la cadena original
* .slice() => Igual que substring pero tambien admite valores negativos
* .replace() => reemplaza primer param. por el segundo param.
* .toUpperCase() => Pasa a mayusculas
* .toLowerCase() => Pasa a minusculas
* .trim() => Elimina los espacios en blanco al inicio y final
*/
console.clear();
var miString = "Hola mundo";
console.log(miString.length);
console.log(miString.indexOf('m'));

//replace => reemplazo mundo por amigos
var newString =  miString.replace("mundo", "amigos");
console.log(newString);
//no se modifica el string original
console.log(miString);

//Substring => extrae una cadena
var string2 = miString.substring(1, 3);
console.log(string2);
//omitiendo el segundo parametro 
var string3 = miString.substring(1);
console.log(string3);
console.log(miString);

//Slice en negativo te retorna desde el final
var miSlice = miString.slice(1, -3);
console.log(miSlice);

//Trim elimina los espacios en blanco
var trimString = "   Hola mundo   ";
console.log(trimString);
console.log(trimString.trim());

