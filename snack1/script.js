var numero1 = parseInt(prompt("inserisci Un numero"));
var numero2 = parseInt(prompt("inserisci un numero"));
var messaggio = "i numeri sono uguali"
if (numero1 > numero2) {
   messaggio = numero1
}
else if (numero1 < numero2) {
   messaggio = numero2
}
alert(messaggio);
