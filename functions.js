/* Funkcje */

function add(a, b) { // funkcja czysta
  return a + b; // wartość wyliczna na podstawie argumentów
}

function dirty(a) { // funkcja z efektem ubocznym
  return Number.MAX_SAFE_INTEGER / a;
}

console.log(dirty(500));

function sideEffect(a, b) { // efekt uboczny:
  sessionStorage.setItem(a, b); // korzystanie z zewnętrznych obiektów
  return a + b;
}

console.clear();

function factorial(n) {
  console.log(n);
  if (n <= 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// console.log(factorial(10));

// Ciąg Fibbonacciego
// 1 1 2 3 5 8 13

console.clear();

/* Domknięcie leksykalne (closure) */

function setCounter() {
  var counter = 0;
  return function tick() {
    return counter++;
  }
}

var counter1 = setCounter();
var counter2 = setCounter();

console.log('counter1', counter1());
console.log('counter2', counter2());
console.log('counter1', counter1());
console.log('counter2', counter2());
console.log('counter1', counter1());
console.log('counter2', counter2());
console.clear();

/* Rozwijanie funkcji (currying) */

function add1(a, b, c) {
  return a + b + c;
}

function add(a) {
  return function(b) {
    return a + b;
  }
}

var add5 = add(5);
console.log(add5(1));
console.log(add5(10));
