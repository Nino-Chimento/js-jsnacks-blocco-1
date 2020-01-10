somma = 0;
for (var i = 0; i < 5; i++) {
  numero = parseInt(prompt("inserisci un numero"))
  
  while (isNaN(numero) == true) {
    numero = parseInt(prompt("inserisci un numero"))
  }
  somma = somma + numero;
}
alert(somma)
