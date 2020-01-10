var primoNumero = parseInt(prompt("insersisci un numero"))
var secondoNumero = parseInt(prompt("inserisci un numero"))
var messaggio;
console.log(isNaN(primoNumero));
console.log(isNaN(secondoNumero));
while (isNaN(primoNumero) == true || isNaN(secondoNumero)== true) {
 primoNumero = parseInt(prompt("insersisci un numero"))
 secondoNumero = parseInt(prompt("inserisci un numero"))
}
if (primoNumero < secondoNumero) {
  messaggio = primoNumero
}
else if (primoNumero > secondoNumero) {
  messaggio = secondoNumero
}
else {
  messaggio ="i numeri sono identici"
}
alert(messaggio)
