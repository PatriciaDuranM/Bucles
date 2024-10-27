/* 1.Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0\.  */
console.log("Ejercicio 1");
const printNumber = (number) => {
  for (let counter = number; counter >= 0; counter--) {
    console.log(counter);
  }
};

printNumber(7);

/*2.Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array
 */
console.log("Ejercicio 2");
const printAdittion = (numbers) => {
  let result = 0;
  console.log(`Resultado inicial: ${result}`);
  for (const number of numbers) {
    console.log(`Resultado actual: ${result}`);
    console.log(
      `Número actual del array que vamos a sumar al resultado: ${number}`
    );
    console.log(`Operación: ${result} + ${number} = ${number + result}`);
    result = result + number;
  }
  console.log(`Resultado final: ${result}`);
};
printAdittion([1, 2, 3]);
printAdittion([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

/*3.Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10\. Para el 4 el resultado debe ser:  
    
  4 x 0 \= 0 4 x 1 \= 4 4 x 2 \= 8 4 x 3 \= 12 4 x 4 \= 16 4 x 5 \= 20 4 x 6 \= 24 4 x 7 \= 28 4 x 8 \= 32 4 x 9 \= 36 4 x 10 \= 40  */
console.log("Ejercicio 3");
const multipy = (number) => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (const arrayNumber of array) {
    const result = number * arrayNumber;
    console.log(`${number} x ${arrayNumber} = ${result}`);
  }
};

const multiply2 = (number) => {
  for (let counter = 0; counter <= 10; counter++) {
    const multi = counter * number;
    console.log(`${number} x ${counter} = ${multi}`);
  }
};

multiply2(8);

/*4.Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:  
  4 x 10 \= 40 4 x 9 \= 36 4 x 8 \= 32 4 x 7 \= 28 4 x 6 \= 24 4 x 5 \= 20 4 x 4 \= 16 4 x 3 \= 12 4 x 2 \= 8 4 x 1 \= 4 4 x 0 \= 0  
  */

console.log("Ejercicio 4");
const multipyInverse = (number) => {
  const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  for (const arrayNumber of array) {
    const result = number * arrayNumber;
    console.log(`${number} x ${arrayNumber} = ${result}`);
  }
};

multipyInverse(5);

const multiplyreverse = (number) => {
  for (let counter = 10; counter >= 0; counter--) {
    const multi = counter * number;
    console.log(`${number} x ${counter} = ${multi}`);
  }
};

multiplyreverse(6);

/*5.Crea una función que reciba el año actual y tu edad, la función debe imprimir:  
    
  - "naciste en el año X"  
  - "En el año X cumpliste 1 año"  
  - "En el año X cumpliste 2 años"  
  - "En el año X cumpliste 3 años" ....*/
console.log("Ejercicio 5");
const ageYear = (year, age) => {
  const birthdate = year - age;
  console.log(`Naciste en el año ${birthdate}`);

  for (let counter = 1; counter <= age; counter++) {
    console.log(`En el año ${birthdate + counter} cumpliste ${counter}`);
  }
};

ageYear(2024, 28);

/*6.Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12\.  */
console.log("Ejercicio 6");

const twoNumber = (numberA, numberB) => {
  let counter = numberA;
  for (counter; counter <= numberB; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};
twoNumber(3, 12);

/*7.Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays. 2 bucles o 1 ? */

console.log("Ejercicio 7");
const arrayFill = () => {
  const array1 = [];
  const array2 = [];
  const repeatedNumbers = [];

  for (let counter = 0; counter < 5; counter++) {
    const numberA = Math.floor(Math.random() * 10);
    array1.push(numberA);

    const numberB = Math.floor(Math.random() * 10);
    array2.push(numberB);

    if (array1.includes(numberB)) {
      repeatedNumbers.push(numberB);
    }
    if (array2.includes(numberA)) {
      repeatedNumbers.push(numberA);
    }
  }
  console.log("Array 1:", array1);
  console.log("Array 2:", array2);
  console.log("Repetido", repeatedNumbers);
};

arrayFill();

/*8.Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo.
Como es SOLO entre uno y si mismo */

console.log("Ejercicio 8");
const primeNumber = (number) => {
  for (let divisor = 2; divisor < number; divisor++) {
    console.log(
      `El resto de dividir ${number} entre ${divisor} es ${number % divisor}`
    );
    if (number % divisor === 0) {
      return console.log(`El número ${number} no es primo`);
    }
  }
  return console.log(`El numero ${number} es primo`);
};

primeNumber(63);

/*9.Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato: "Número: 2 \- Cuadrado: 4 \- Cubo: 8". Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente) */

console.log("Ejercicio 9");
const cuadrado = (array) => {
  /*primero que meta cada número del array*/
  for (const number of array) {
    console.log(`Numero: ${number}`);
    /* segundo que haga el cuadrado */
    console.log(`Cuadrado: ${Math.pow(number, 2)}`);
    /* tercero que haga el cuadrado */
    console.log(`Cubo: ${Math.pow(number, 3)}`);
  }
};

cuadrado([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*10.Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.  */
console.log("Ejercicio 10");
const vocalMayus = (word) => {
  const vocals = ["a", "e", "i", "o", "u"];
  let newWord = "";
  for (const letter of word) {
    if (vocals.includes(letter)) {
      newWord = newWord + letter.toUpperCase();
    } else newWord = newWord + letter;
  }

  console.log(newWord);
};

vocalMayus("culo");

/*11.Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser: a: 3, e: 3, i: 1, o: 1, u: 1  */
console.log("Ejercicio 11");
const phrase = (word) => {
  const vocals = ["a", "e", "i", "o", "u"];
  let aCounter = 0;
  let eCounter = 0;
  let iCounter = 0;
  let oCounter = 0;
  let uCounter = 0;

  for (const letter of word.toLowerCase()) {
    if (letter === "a") {
      aCounter++;
    } else if (letter === "e") {
      eCounter++;
    } else if (letter === "i") {
      iCounter++;
    } else if (letter === "o") {
      oCounter++;
    } else if (letter === "u") {
      uCounter++;
    }
  }
  console.log(
    `a:${aCounter}, e:${eCounter}, i:${iCounter}, o:${oCounter}, u:${uCounter} `
  );
};

phrase("buenas tardes");

/*12.Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa" */
console.log("Ejercicio 12");

const twoWords = (wordA, wordB) => {
  /*variable a rellenar*/
  let result = "";
  /*primero ver que palabra es más corta para que pare de meter caracteres*/
  let shortword;
  if (wordA.length <= wordB.length) {
    shortword = wordA;
  } else {
    shortword = wordB;
  }
  /*bucle*/
  for (let counter = 0; counter < shortword.length; counter++) {
    result = result + wordA[counter];
    result = result + wordB[counter];
  }
};

twoWords("hola", "adios");

/*13.Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"
 */
console.log("Ejercicio 13");
const reverseWord = (word) => {
  let result = "";
  for (let index = word.length - 1; index >= 0; index--) {
    result = result + word[index];
  }
};

reverseWord("sopa");

/*14.Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con \['hola', 'adios', 'gato', 'perro', 'casa'\] deberá imprimir por consola \['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A'\]*/

console.log("Ejercicio 14");
const fiveWord = (arrayOfWords) => {
  const finalLetters = [];
  for (const word of arrayOfWords) {
    console.log(`Palabra actual de la lista: ${word}`);
    const primeraLetra = word.charAt(0).toUpperCase();
    console.log(primeraLetra);
    const ultimaLetra = word.charAt(word.length - 1).toUpperCase();
    console.log(ultimaLetra);
    finalLetters.push(primeraLetra, ultimaLetra);
  }
  console.log(finalLetters);
};

fiveWord(["hola", "adios", "gato", "perro", "casa"]);

/*6. Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

const ej6 = (words) => {
  const letters = [];
  letters.push(
    words[0].charAt(0).toUpperCase(),
    words[0].charAt(words[0].length - 1).toUpperCase(),
    words[1].charAt(0).toUpperCase(),
    words[1].charAt(words[1].length - 1).toUpperCase(),
    words[2].charAt(0).toUpperCase(),
    words[2].charAt(words[2].length - 1).toUpperCase()
  );

  console.log(letters);
};

ej6(["buenas", "comida", "pelo"]);*/
