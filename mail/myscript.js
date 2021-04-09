var email = ["pippo@gmail.com", "bracco@gmail.com","ginopilotino@gmail.com"];
console.log(email[0]);
console.log(email[1]);
console.log(email[2]);

var emailUtente = prompt("inserisci email di registrazione");


if (emailUtente == email){
    document.writeln("Registrazione effettuata")
}else if (emailUtente != email){
    alert("email non registrata")
}