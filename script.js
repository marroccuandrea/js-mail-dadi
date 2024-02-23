// Creo un array con la lista utenti autorizzati
const listaUtenti = ['pincopallo@gmail.com', 'lucabianchi@libero.it', 'federicorossi@gmail.com']

document.addEventListener('DOMContentLoaded', function(){

// Chiedo all'utente di inserire la mail

let eMail = prompt ('Inserisci la tua email');

// Controllo presenza mail nell'elenco
// Dichiaro la costante che mi servirà a verificare la presenza della mail
let mailFind;
for(let i = 0; i < listaUtenti.length; i++){
    if(eMail === listaUtenti[i]){
        mailFind = true;
        let risposta = document.getElementById('output');
        risposta.innerHTML += `
        <p>Accesso consentito !</p>
        `
        break;
    }
    else {
        mailFind = false;
        let risposta = document.getElementById('output');
        risposta.innerHTML += `
        <p>Accesso negato !</p>
        `
        break;
    }
}

})



