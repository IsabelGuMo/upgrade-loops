//Iteración #1: Usa includes
//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = [
    'Camiseta de Pokemon', 
    'Pantalón coquinero', 
    'Gorra de gansta', 
    'Camiseta de Basket', 
    'Cinrurón de Orión', 
    'AC/DC Camiseta'
];

for (let index = 0; index < products.length; index++) {
    const product = products[index]; 

    if (product.toLowerCase().includes('camiseta')) {
        console.log(product);
    }
}
/*Sensibilidad a Mayúsculas/Minúsculas
El método includes() es "case sensitive" (tiene en cuenta mayúsculas y minúsculas).
Por seo utilizamos el metodo o funcion toLowerCase. */

//Iteración #2: Condicionales avanzados
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
//Una vez lo tengas compruébalo con un console.log.

//iteracion #3: Probando For...of**

//Usa un bucle for of para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.


const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (let place of placesToTravel) {
    console.log(place);
}

//iteracion#4 Probando for...in
//Usa un **for...in** para imprimir por consola los datos del alienígena.. 

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};


for (let key in alien) {
    console.log("Propiedad:" + key + ", valor: " + alien[key]);
}

//Iteración #5: Probando For
//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTrav = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
];

for (let index = 0; index < placesToTrav.length; index++) {
    const element = placesToTrav[index];
    if (element.id === 11 || element.id === 40) {
        placesToTrav.splice(index, 1);
        
   }         
}
console.log(placesToTrav);

//Iteración #6: Mixed For...of e includes
//Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. 
//Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

const toysNoCat = [];

for (let toy of toys) {
    if (!toy.name.toLowerCase().includes('gato')) {
        toysNoCat.push(toy);  
    }
}

console.log(toysNoCat);

//Iteración #7: For...of avanzado
//Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys.
// Imprimelo por consola.. Puedes usar este array:

const popularToys = [];
const soldToys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
];

for (const toy of soldToys) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);