/*
Zadanie 9. Metody tablic
Napisz skrypt, który bez użycia pętli obliczy sumę oraz iloczyn liczb naturalnych w przedziale od 1 do 10.
*/

var array = new Array(10);
array.fill(0);

array = array.map(function(value, index) {
  return index + 1;
});

var result = array.reduce(function(acc, value) {
  return {
    sum: acc.sum + value,
    product: acc.product * value,
  }
}, {sum: 0, product: 1});

// var prod = array.reduce(function(acc, value) {
//   return acc * value;
// }, 1);
// console.log(sum, prod);

console.log(result);
