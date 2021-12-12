/* Tablice */

var array1 = [1, 2, 3];
var array2 = new Array(10);

// console.log(array1);
// console.log(array2);

var array = [];
console.log(array);

array.push(1);
array.push(2);
array.push(3, 4, 5);

console.log(array);

var popedElement = array.pop();

console.log('array', array);
console.log(popedElement);

array.shift();
console.log('shift', array);

array.unshift(9, 8, 7);

array.reverse();

console.log('reverse', array);

array.sort();

console.log('sort', array);

array.reverse();

console.log('reverse', array);

console.clear();
console.log('join')

console.log(array);

var str = array.join('-'); /* metoda join nie zmienia
                          istniejącej tablicy */
console.log(array);
console.log(str);

var concatenated = array.concat([1, 6]);

console.log(array);
console.log(concatenated);

array.sort();
console.clear();
console.log(array);

var sliced = array.slice(1, 3); /* slice nie zmiena tablicy bazowej
                                  tylko tworzy i zwraca nową */
console.log(sliced);

array.splice(1, 3); /* zmienia zawartość tablicy bazowej */

console.log(array);

array.splice(1, 0, 3, 4, 5, 6, 7);
console.log(array);

array.splice(1, 1);
array.splice(3, 1);

console.log(array);
console.clear();

var empty = new Array(10);
console.log(empty);

empty.fill(0);

console.log(empty);

console.log(array);
array.fill(50, 2, 5);
console.log(array);

console.clear();

/* Metody iteracyjne tablic */

var array2 = [1, 2, 3, 4];

// array2.forEach(function(value, index, array) {
//   console.log('value:', value);
//   console.log('index:', index);
//   console.log('array', array);
// });

function printValue(value, index) {
  console.log(index, value);
}

array2.forEach(printValue)

console.clear();

var mappedArray = array2.map(function(value) {
  console.log(value);
  return value * 2;
});

// console.log(array2);
// console.log(mappedArray);

function double(value) {
  return value * 2;
}

/* map: nowa tablica ma dokładnie tyle samo
   elementów co tablica bazowa */
var mappedArray2 = array2.map(double);
console.log(mappedArray2);

console.clear();

/* filter: nowa tablica może mieć
   maksymalnie tyle elementów co tablica bazowa
*/

var filteredArray = array2.filter(function(value) {
  return value % 2 === 0; /*
          1 -> false
          2 -> true
          3 -> false
          4 -> true */
});

console.log(array2);
console.log(filteredArray);

console.clear();

var reducedArray = array2.reduce(function (acc, value, index, array) {
  console.log(acc, value, index);
  return acc + value;
}, 0);

console.log(array2);
console.log(reducedArray);

var reducerArray2 = array2.reduce(function(acc, value, index) {
  acc.push(value, value);
  return acc;
}, []);

console.log(reducerArray2);
