
// CHIEDO GENTILMENTE LE EMAIL CON UN PROMPT
var emailUtente = prompt("inserisci email di registrazione");
// CONTROLLO EMAIL 
console.log(emailUtente);

// ARRAY DELL'EMAIL VALIDE
var emailValide = ["booleano@gmail.com", "js@gmail.com", "francesco@gmail.com", "professional@gmail.com"];
// CONTROLLO DELLE EMAIL VALIDE
console.log(emailValide);
// METODO BOLEANO PER AVERE POI ACCESSO NEGATO
var accesExists = false;

// CICLO E VERIFICA DELLE EMAIL
for (var i = 0; i < emailValide.length; i++) {
    console.log(emailValide[i]);
// SE L'EMAIL è VALIDA LA REGISTRAZIONE è EFFETTUATA
    if (emailValide[i] === emailUtente) {
        accesExists = true;
        alert("Registrazione effettuata");
    }


}
// SE L'EMAIL NON è VALIDA ACCESSO NEGATO
if (!accesExists) {
    alert("Accesso Negato");
        }