// Creo un array con la lista utenti autorizzati
const listaUtenti = ['pincopallo@gmail.com', 'lucabianchi@libero.it', 'federicorossi@gmail.com']

const mail = document.getElementById('email');
const btn = document.getElementById('bottone');

btn.addEventListener('click', function(){

    for(let i = 0; i < listaUtenti.length; i++){
        if(mail.value == listaUtenti[i]){
            document.getElementById('accesso').innerHTML = 'Accesso consentito !';
            i = listaUtenti.length;
        }
        else{
            document.getElementById('accesso').innerHTML = 'Accesso negato !';
        }
    }
})


// DADI

let giocatore = Math.floor(Math.random()*6)+1;

let pc = Math.floor(Math.random()*6)+1;

console.log(giocatore, pc);

document.getElementById('giocatore').innerHTML = giocatore;
document.getElementById('pc').innerHTML = pc;


if(giocatore > pc){
    document.getElementById('risultato').innerHTML = 'Ha vinto il giocatore !'
    console.log('Ha vinto il giocatore!');
}
else if(giocatore < pc){
    document.getElementById('risultato').innerHTML = 'Ha vinto il pc !'
    console.log('Ha vinto il pc!');
}
else{
    document.getElementById('risultato').innerHTML = 'Parità !'
    console.log('Parità!');
}