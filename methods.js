/* Metody typu liczbowego */

var num1 = 123;

console.log(num1.toString());

var num2 = 1 / 3;
console.log(num2);
console.log(num2.toFixed(2));

var num3 = 1000000000000000000;
console.log(num3);
console.log(num3.toExponential());

/* Metody typu tekstowego */

var hello = "Hello JavaScript! 😎";

console.log(hello);

console.log("charAt");
console.log(hello.charAt(10));

console.log("charAt");
console.log(hello.charCodeAt(10));

console.log("startsWith");
console.log(hello.startsWith("H"));
console.log(hello.startsWith("Hell"));
console.log(hello.startsWith("Ja"));

console.log("endsWith");
console.log(hello.endsWith("😎"));
console.log(hello.endsWith("! 😎"));
console.log(hello.endsWith("!"));
console.log(hello.endsWith("Hello"));

var java = "Java";
var script = "Script";

console.log(java);
console.log(script);

console.log(java.concat(script));
console.log(script.concat(java));

console.log(java + script);
console.log(script + java);

/* split */

var longText = "Hello JavaScript! Nice to meet you.";

console.log(longText.split(" "));

console.log("Hello JavaScript".split(" "));
console.log("Hello JavaScript".split("J"));
console.log("Hello JavaScript".split(""));

var array = longText.split("");
console.log(array);

console.log(array.join("")); // metoda tablicy

//               domyślna wartość to przecinek v
console.log("123,456,678,890".split(",").join());

console.log("replace");

console.log("Ala ma kota a kot ma ale".replace("kot", "KOT"));

console.log("replaceAll");

console.log("Ala ma kota a kot ma ale".replaceAll("kot", "KOT"));

console.log("toLowerCase");
console.log("Hello JavaScript".toLowerCase());

console.log("toUpperCase");
console.log("Hello JavaScript".toUpperCase());

var textWithWhitespace = " \t   \n    wartość\n laksjdkl \n         ";

console.log(textWithWhitespace);

console.log("trim");
console.log(textWithWhitespace.trim());

console.log("trimLeft");
console.log(textWithWhitespace.trimLeft());

console.log("trimRight");
console.log(textWithWhitespace.trimRight());

/* Object/JSON */

console.clear();

var person = {
  name: {
    first: "Adrian",
    last: "Juszczak",
  },
  age: 30,
  sayHello() {
    console.log("Hello", this.name.first);
  },
};

console.log(typeof person, person);

const str = JSON.stringify(person);

console.log("json string");
console.log(typeof str, str);

console.log("parsed object");
var obj = JSON.parse(str);

console.log(obj);

console.clear();

/* Obiekt Math */

console.log("Math.random");
// console.log(Math.random());
// console.log(Math.random() * 10);

var rand = Math.random() * 100;

console.log(rand);

console.log("Math.round");
console.log(Math.round(rand));

console.log("Math.floor");
console.log(Math.floor(rand));

console.log("Math.ceil");
console.log(Math.ceil(rand));

/* generowanie losowych tekstów */

function generateRandomText(length) {
  var randomLetters = [];
  for (var i = 0; i < length; i++) {
    /*
     * generujemy losowy kod znaku ASCII
     * https://pl.wikipedia.org/wiki/ASCII
     *
     * Losowe liczby z przedziału 0-61
     * do których dodamy 65
     */
    var code = Math.floor(Math.random() * 61) + 65;
    // console.log("random code", code);
    var char = String.fromCharCode(code);
    // console.log("random char from code", char);
    randomLetters.push(char);
  }
  return randomLetters.join('');
}

var randomText1 = generateRandomText(16);
console.log(randomText1);

var randomText2 = generateRandomText(8);
console.log(randomText2);


console.log(Math.min(123, 44));
console.log(Math.max(123, 44));

console.log(Math.sqrt(4));
console.log(Math.sqrt(9));
console.log(Math.sqrt(16));

console.log('sin(0)', Math.sin(0));
console.log('cos(pi)', Math.cos(Math.PI));

console.clear();

/* Date */

/*
 * TIMESTAMP - liczba sekund od 1 stycznie 1970
 */

/* Metody statyczne, zwracające timestamp */

var timestamp1 = Date.now();
console.log(timestamp1);

var timestamp0 = Date.parse('1970-01-01');
console.log('1970-01-01', timestamp0);

var timestamp2 = Date.parse('2021-12-12');
console.log('2021-12-12', timestamp2);

/* Tworzenie instancji daty */

var date1 = new Date(timestamp1);
console.log(typeof date1);

var date2 = new Date();
console.log(date2);

console.log('year', date2.getFullYear());
console.log('month', date2.getMonth()); // UWAGA: przesunięcie o 1
console.log('day', date2.getDay()); /* dzień tygodnia
                                      numeracja od niedzieli
                                      0 - niedziela
                                      1 - poniedziałek */
console.log('date', date2.getDate()); // dzień miesiąca

console.log('hours', date2.getHours());
console.log('minutes', date2.getMinutes());
console.log('seconds', date2.getSeconds());

console.log('getYear', date2.getYear());
/* getYear zwraca liczbę lat od roku 1900 */

var date3 = new Date();
date3.setFullYear(2022);
date3.setDate(15);

console.log(date3);

var date4 = new Date(0);
date4.setFullYear(2022);
date4.setDate(15);

console.log(date4);


/*
getFullYear i setFullYear
getMonth i setMonth
getDay i setDay
getDate i setDate
getHours i setHours
getMinutes i setMinutes
getSeconds i setSeconds
getTime i setTime
*/
