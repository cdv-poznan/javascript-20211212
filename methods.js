/* Metody typu liczbowego */

var num1 = 123;

console.log(num1.toString());

var num2 = 1 / 3;
console.log(num2);
console.log(num2.toFixed(2))

var num3 = 1000000000000000000;
console.log(num3);
console.log(num3.toExponential())

/* Metody typu tekstowego */

var hello = "Hello JavaScript! 😎";

console.log(hello);

console.log('charAt');
console.log(hello.charAt(10));

console.log('charAt');
console.log(hello.charCodeAt(10));

console.log('startsWith');
console.log(hello.startsWith('H'));
console.log(hello.startsWith('Hell'));
console.log(hello.startsWith('Ja'));

console.log('endsWith');
console.log(hello.endsWith('😎'));
console.log(hello.endsWith('! 😎'));
console.log(hello.endsWith('!'));
console.log(hello.endsWith('Hello'));

var java = 'Java';
var script = 'Script';

console.log(java);
console.log(script);

console.log(java.concat(script));
console.log(script.concat(java));

console.log(java + script);
console.log(script + java);

/* split */

var longText = 'Hello JavaScript! Nice to meet you.';

console.log(longText.split(' '));

console.log('Hello JavaScript'.split(' '));
console.log('Hello JavaScript'.split('J'));
console.log('Hello JavaScript'.split(''));

var array = longText.split('');
console.log(array);

console.log(array.join('')); // metoda tablicy

//               domyślna wartość to przecinek v
console.log('123,456,678,890'.split(',').join(  ));


console.log('replace');

console.log('Ala ma kota a kot ma ale'.replace('kot', 'KOT'));

console.log('replaceAll');

console.log('Ala ma kota a kot ma ale'.replaceAll('kot', 'KOT'));

console.log('toLowerCase');
console.log('Hello JavaScript'.toLowerCase());

console.log('toUpperCase');
console.log('Hello JavaScript'.toUpperCase());

var textWithWhitespace = ' \t   \n    wartość\n laksjdkl \n         ';

console.log(textWithWhitespace);

console.log('trim');
console.log(textWithWhitespace.trim());

console.log('trimLeft');
console.log(textWithWhitespace.trimLeft());

console.log('trimRight');
console.log(textWithWhitespace.trimRight());

/* Object/JSON */

console.clear();

var person = {
  name: {
    first: 'Adrian',
    last: 'Juszczak'
  },
  age: 30,
  sayHello() {
    console.log('Hello', this.name.first);
  }
}

console.log(typeof person, person);

const str = JSON.stringify(person);

console.log('json string');
console.log(typeof str, str);

console.log('parsed object');
var obj = JSON.parse(str);

console.log(obj);
