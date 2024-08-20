// function logger() {
//   console.log("this is my name");
// }

// //calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//FUNCTION DECLARATIONS VS EXPRESSIONS
// const age1 = calcAge1(1991); //calling the function first and declaring it on 21 line

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// } // function declaration =  we can the function call it beofre it is declared and still works

// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }; //function expression = we cannot call it without declaring it first

// const age2 = calcAge2(1991);
// console.log(age1, age2);

//ARROW FUNCTION
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement}`;
// };

// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }

//   // return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1991, "Alex"));
// console.log(yearUntilRetirement(1950, "Alex"));

//CHALLENGE 1
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

let scoreKoalas = calcAverage(65, 54, 49);
let scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! ${avgDolphins} vs ${avgKoalas}`);
  } else {
    console.log(`No team wins`);
  }
}
checkWinner(scoreKoalas, scoreDolphins);
checkWinner(576, 111);
// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
