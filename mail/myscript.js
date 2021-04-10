var emailUtente = prompt("inserisci email di registrazione");
console.log(emailUtente);


var emailValide = ["booleano@gmail.com", "js@gmail.com", "francesco@gmail.com", "professional@gmail.com"];
console.log(emailValide);

var accesExists = false;


for (var i = 0; i < emailValide.length; i++) {


    if (emailValide[i] === emailUtente) {
        accesExists = true;
        alert("Registrazione effettuata");
    }


}

if (!accesExists) {
    alert("Accesso Negato");
        }