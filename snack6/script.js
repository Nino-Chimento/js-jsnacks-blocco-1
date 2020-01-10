numeroUtente = parseInt(prompt("inserisci un numero"));
while (isNaN(numeroUtente) == true) {
  numeroUtente = parseInt(prompt("inserisci un numero"));
}
i = 1
for (var i = 1; i <= numeroUtente; i++) {
    cubo = Math.pow(i, 3);

}
console.log(cubo);
