//Iteración #1: Usa includes
//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

function wordsList(words) {
    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        
        if (word.includes('Camiseta')) {
            console.log(word);
        }
    }
}  
wordsList(products); 

//Iteración #2: Condicionales avanzados
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
//Una vez lo tengas compruébalo con un console.log.

//iteracion #3: Probando For...of**

//Usa un bucle for of para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.


const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let places of placesToTravel) {
    console.log(places)
}

//iteracion#4 Probando for...in
//Usa un **for...in** para imprimir por consola los datos del alienígena.. 

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}


for (let key in alien) {
    console.log("Propiedad:" + key + ", valor: " + alien[key]);
}

//Iteración #5: Probando For
//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.


//const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

//for (let index = 0; index < placesToTravel.length; index++) {
  //  const element = placesToTravel[index];
    //if (element.id === 11 || element.id === 40) {
      //  placesToTravel.splice(index, 1);
        
   // } 
    //console.log(placesToTravel);    
//}

   
