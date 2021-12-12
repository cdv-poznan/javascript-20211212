/*
Zadanie 8. Tablice
Napisz skrypt, który pobierze od użytkownika liczbę n. Jeżeli nie poda wartości liczbowej skrypt powinien wyświetlić informację o błędzie. Jeżeli wartość będzie poprawna powinien wyświetlić n razy prośbę o podanie wartości tekstowej. Każda z wartości tekstowych powinna zostać zapisana w tablicy. Następnie użytkownik powinien mieć możliwość wyboru wyświetlenia wartości tablicy w kolejności alfabetycznej rosnąco bądź malejąco.
*/

do {
  var input = prompt("Podaj liczbę:");
  var num = parseInt(input);

  if (Number.isNaN(num)) {
    alert("Niepoprawna wartość");
  } else {
    var words = new Array();

    for (var i = 0; i < num; i++) {
      var word = prompt("Podaj tekst " + (i + 1) + ":");
      words.push(word);
    }

    var asc = confirm("Czy posortować rosnąco?");

    words.sort();

    if (!asc) {
      words.reverse();
    }

    alert(words.join(", "));
  }
} while (Number.isNaN(num));
