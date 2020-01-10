var primaParola = prompt("inserisci una parola");
var secondaParola = prompt("inserisci una parola");
var messaggio;
while (isNaN(primaParola) == false || isNaN(secondaParola) == false) {
  primaParola = prompt("inserisci una parola");
    primaParola = prompt("inserisci una parola");
}
if (primaParola.length > secondaParola.length) {
  messaggio = primaParola
}
else if (primaParola.length < secondaParola.length) {
  messaggio = secondaParola
}
else {
  messaggio ="le parole hanno la stessa lunghezza"
}
alert(messaggio)
