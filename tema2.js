/*
 1 - Creați o funcție care primește ca și parametru un număr și returnează dublul său dacă numărul primit este impar, altfel returnează numărul scăzut cu 2 dacă este par. Afișați rezultatul în consolă.
*/

const checkNumber = function(num) {
    let result;
    if (num % 2 == 0) {
      result = num - 2;
     } else {result = num * 2;
     return result;
    }
  }
  
  console.log(checkNumber(3));
  
  
  
  /********************************************************************************************************************************/
  
  /* 2 - Creați o funcție care stochează intr-un array doar numerele prime dintr-un array primit ca si parametru. Parcurgeți array-ul folosind un “for loop”. Afișați rezultatul în consola.
   Ex:
   const arr = [1,2,3,4,5,6,7,8,9];
   savePrimes(arr) => [1,2,3,5,7];
  */
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const savePrimes = function (arr2) {
    let arrPrimes = [];
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] === 1 || arr2[i] === 2 || arr2[i] === 3) {
        arrPrimes.push(arr2[i]);
      } else if (arr2[i] % 2 > 0 && arr2[i] % 3 > 0) {
        arrPrimes.push(arr2[i]);
      }
    }
    console.log(arrPrimes);
  }
  
  savePrimes(arr);
  
  
  
  /********************************************************************************************************************************/
  
  /*
  3 - Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca si parametru. Parcurgeți array-ul folosind “forEach”. Afișați rezultatul în consola.
      Ex:
  saveStrings([1, ‘1’, ‘salut’, 2, 6, true, ‘true’]) -> [‘1’, ‘salut’, ‘true’]
  saveStrings([1,2,3,4]) -> []
  saveStrings([‘1’,’2’,’3’,’4’]) -> [‘1’,’2’,’3’,’4’]
  */
  
  function saveStrings(arr) {
    let ar = [];
    arr.forEach((element) => {
      if (typeof element === "string") {
        ar.push(element);
      }
    });
    console.log(ar);
  }
  
  saveStrings([1, "1", "salut", 2, 6, true, "true"]);
  saveStrings([1, 2, 3, 4]);
  saveStrings(["1", "2", "3", "4"]);
  
  
  
  /*******************************************************************************************************************************/
  
  /*
  4 - Creați o funcție care adună cifrele impare ale unui număr primit ca și parametru de tip string folosind  “for loop” si keyword-ul “continue”. 
  Ex:
      addDigits(“1523”) => 9
  */
  
  function addDigits(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      if (parseInt(str[i]) % 2 === 0) {
        continue;
      } else {
        sum += parseInt(str[i]);
      }
    }
    console.log(sum);
  }
  
  addDigits("1523");
  
  
  
  /********************************************************************************************************************************/
  /*
  
  5 - Creați un switch cu cel puțin 5 case-uri din care cel puțin 2 să aibă același rezultat, după exemplul prezentat la curs.
  
  */
  
  const day = 'cucu';
  
  switch (day) { 
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      console.log('go to work');
      break;
    case 'saturday':
    case 'sunday':
      console.log('Its weekend ... yeeee .... :)');
      break;
    default:
      console.log('Please enter a valid week day name');
  }