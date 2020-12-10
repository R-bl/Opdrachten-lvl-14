//Welkom bericht en Vraag om naam in te voeren


let player = function(number, msg = 'Welkom! wat is je naam?'){
    let player_name = prompt(`${msg}`);
    
    if(player_name === null || player_name === "")
        player('Voer geldige naam in.');
        
    alert(`Hey ${player_name}`);

}
let getRandomNr = function(start, range){
    let randomNumber = Math.floor(Math.random() * range) + 1;
    
}


player();


l