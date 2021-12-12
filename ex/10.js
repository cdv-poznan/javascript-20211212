/*
 Zadanie 10. Metody tablic
Napisz sktypt który wygeneruje tablicę 10 losowych liczb naturalnych z przedziału od 0 do 100. Jeśli tablica zawiera dowolną liczbę pierwszą skrypt powinien zwrócić tę liczbę oraz jej pozycję w tablicy. W przeciwnym wypadku rzucić błąd.
*/

var numbers = new Array(10);
numbers.fill(0);


numbers = numbers.map(function() {
  var randomNumber = Math.random() * 100;
  return Math.round(randomNumber);
});

console.log(numbers);

function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

var index = numbers.findIndex(function(value) {
  return isPrime(value);
});

if (index > -1) {
  console.log('liczba pierwsz znajduje się pod indeksem:', index);
  console.log('jej wartość to', numbers[index]);
} else {
  console.error('brak liczb pierwszych w tablicy');
}
