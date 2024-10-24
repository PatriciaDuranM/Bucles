/* 1.Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0\.  */

const printNumber = (number) => {
  for (let counter = number; counter >= 0; counter--) {
    console.log(counter);
  }
};

printNumber(7);

/*2.Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array
 */

const printAdittion = (numbers) => {
  let result = 0;
  for (const number of numbers) {
    result = result + number;
  }
  console.log(result);
};

printAdittion([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

/*3.Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10\. Para el 4 el resultado debe ser:  
    
  4 x 0 \= 0 4 x 1 \= 4 4 x 2 \= 8 4 x 3 \= 12 4 x 4 \= 16 4 x 5 \= 20 4 x 6 \= 24 4 x 7 \= 28 4 x 8 \= 32 4 x 9 \= 36 4 x 10 \= 40  */

const multipy = (number) => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (const arrayNumber of array) {
    const result = number * arrayNumber;
    console.log(`${number} x ${arrayNumber} = ${result}`);
  }
};

multipy(4);

/*4.Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:  
  4 x 10 \= 40 4 x 9 \= 36 4 x 8 \= 32 4 x 7 \= 28 4 x 6 \= 24 4 x 5 \= 20 4 x 4 \= 16 4 x 3 \= 12 4 x 2 \= 8 4 x 1 \= 4 4 x 0 \= 0  
  */
const multipyInverse = (number) => {
  const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  for (const arrayNumber of array) {
    const result = number * arrayNumber;
    console.log(`${number} x ${arrayNumber} = ${result}`);
  }
};

multipyInverse(5);

/*5.Crea una función que reciba el año actual y tu edad, la función debe imprimir:  
    
  - "naciste en el año X"  
  - "En el año X cumpliste 1 año"  
  - "En el año X cumpliste 2 años"  
  - "En el año X cumpliste 3 años" ....
*/

/*6.Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12\.  */

const twoNumber = (numberA, numberB) => {
  let counter = numberA;
  for (counter; counter <= numberB; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};
twoNumber(3, 12);

/*7.Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays. 2 bucles o 1 ?  */

const arrayFill = () => {
  const array1 = [];
  const array2 = [];

  for (let counter = 0; counter < 5; counter++) {
    array1.push(Math.floor(Math.random() * 10));
  }
  for (let counter = 0; counter < 5; counter++) {
    array2.push(Math.floor(Math.random() * 10));
  }
  console.log("Array 1:", array1);
  console.log("Array 2:", array2);
};

arrayFill();

/*8.Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo */

const primeNumber = (number) => {};

/*9.Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato: "Número: 2 \- Cuadrado: 4 \- Cubo: 8". Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente) */

/*10.Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.  */

/*11.Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser: a: 3, e: 3, i: 1, o: 1, u: 1  */

/*12.Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"  */

/*13.Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"*/

/*14.Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con \['hola', 'adios', 'gato', 'perro', 'casa'\] deberá imprimir por consola \['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A'\] */
