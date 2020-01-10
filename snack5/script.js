listaNumeri = [];
for (var i = 0; i <6; i++) {
  numeroUtente = parseInt(prompt("inserisci un numero"));
  while (isNaN(numeroUtente)== true) {
    numeroUtente = parseInt(prompt("inserisci un numero"));
  }
  if (numeroUtente%2 != 0) {
    listaNumeri.push(numeroUtente)
  }
  }
console.log(listaNumeri);
