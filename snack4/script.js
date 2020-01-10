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
    console.log(listaInvitati[i]);
  }

}
alert(messaggio)
