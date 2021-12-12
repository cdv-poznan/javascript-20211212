/* Funkcja (function) */

/* deklaracja funkcji */

function divide(dividend, divider) {
  var quotient = dividend / divider;
  console.log(dividend, divider, quotient);
  return quotient;
}

var q1 = divide(81, 9);
var q2 = divide(4, 2);

console.log('wynik dzielenia 81 przez 9 to', q1);
console.log('wynik dzielenia 4 przez 2 to', q2);


// funkcja
function add(a, b) {
  return a + b;
}

var c1 = add(2, 8); /* przypisanie wartości liczbowej 10
                       zwróconej przez funkcję add */

var c3 = add; // przypisanie funkcji

var c2 = c3(1, 2); // c2 to liczba zwrócona przez funkcję add


// procedura
function sayHello(name) {
  console.log('Hello ' + name + '!');
}

/* obiekt (object) */

var firstName = 'Ala';

var person = {
  firstName: 'Adrian', // pole
  age: 20, // pole
  sayHello1: function() { // metoda (funkcja anonimowa)
    console.log('Hello', firstName, '!');
  },
  sayHello2() { // metoda
    console.log('Hello', this.firstName, '!');
  },
  sayHello3: function sayHello() { // metoda (funkcja nazwana sayHello)
    console.log('Hello', firstName, '!');
  },
}

console.log(person.name);

function multiplyBy2(num) {
  return num * 2;
}

/* funkcje anonimowe */

[1, 2, 3].map(function (num) {
  return num * 2;
});

var a = function(num) {
  return num * 2;
}

/* wyrażenia funkcyjne */

function sub(a, b) {
  return a - b;
}

var sub2 = sub;

var sub3 = function(a, b) {
  return a - b;
}


function sayHello4(name) {
  console.log('Hello');
  console.log(name);
  console.log('!!!');
}


var person1 = {
  name: 'Ala',
  age: 12,
  sayHello() {
    sayHello4(this.name);
  }
}

var person2 = {
  name: 'Ala',
  sayHelloTo(otherPersonName) {
    console.log(this.name, 'says hello to', otherPersonName);
  }
}

function sayHelloTo(otherPersonName) {
  console.log('Hello ', otherPersonName);
}

sayHelloTo('John');
person2.sayHelloTo('John');

function sayHelloEveryone() {
  console.log('Hello everyone!');
}

sayHelloEveryone();
sayHelloEveryone('John');


/* argumenty funkcji */

function sum(a, b, c) { // czysta funkcja
  return a + b + c;
}

var outNumber1 = 1;
var outNumber2 = 2;

var sume1 = sum(1, 2, 50);

var sum2 = sumOutside();

outNumber2 = 30;
var sum3 = sumOutside();


function sumOutside() { // zła praktyka (funkcja z efektami ubocznymi)
  return outNumber1 + outNumber2;
}

function sumPure(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumPure(outNumber1, outNumber2, 0);


/* Typ pierwszoklasowy (first-class citizen) */

function sub(a, b) {
  return a - b;
}

var sub2 = sub;

function getFunction() {
  return sub;
}

function setFunction(fn) {

}

setFunction(sub); // var fn = sub
