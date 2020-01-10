listaInvitati = ["nino","marco","francesco","ludovico"];
var nomeInvitato = prompt("inserisci il tuo nome");
var messaggio = "non sei invitato"
while (isNaN(nomeInvitato) == false) {
  nomeInvitato = prompt("inserisci il tuo nome");
}
for (var i = 0; i < listaInvitati.length; i++) {
  console.log(listaInvitati[i]);
  if (nomeInvitato == listaInvitati[i]) {
    messaggio = "benvenuto"
    utenteInvitato =nomeInvitato;
  }
}

listaInvitati.sort();
console.log(listaInvitati);
ilTuoPosto = listaInvitati.indexOf(utenteInvitato) + 1



alert(messaggio + "il tuo posto a sedere e' il N"+ ilTuoPosto)
