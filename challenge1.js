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
