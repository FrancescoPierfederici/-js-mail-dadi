


// VARIABILE TIRO UMANO
var umanoTiro = Math.round(Math.random() * 6) + 1 ;
console.log( umanoTiro + " è il numero tirato dall'umano.");
// VARIABILE TIRO MACCHINA
var macchinaTiro = Math.round(Math.random() * 6) + 1 ;
console.log(macchinaTiro +" è il numero tirato della macchina.");

// ADESSO COMPARIAMO LE VARIABILI DETERMINANDO ANCHE IL PAREGGIO


// VINCE L'UMANO
if(umanoTiro > macchinaTiro){
    console.log(umanoTiro + " è il numero vincente dell'umano.");
// VINCE LA MACCHINA
}else if (macchinaTiro > umanoTiro){
    console.log(macchinaTiro + " è il numero vincente della macchina.");
// PAREGGIO
}else{
    console.log("pareggio!");
}



