function guessNumber() {
    const name = prompt('Hey Wat is je naam?');
    alert(`Welkom ${name}.`);
    // Genereer random getal tussen 0 en 25
    const random = Math.floor(Math.random() * 25) + 0;

    // input van gebruiker
    let number = parseInt(prompt('Geef een nummer tussen 0 en 25: '));

    // pak input van gebruiker check of het niet klopt
    while(number !== random) {
        number = parseInt(prompt('Dit is niet correct! Probeer het nog eens:'));
    }

    // Check of gegeven nummer hetzelfde is
    if(number == random) {
        alert('Gefeliciteerd!!! Je hebt het goede nummer geraden');
    }
    // Game afgelopen.
    alert(`Tot ziens ${name}. Het spel is nu afgelopen.`);
  }

// call the function
guessNumber();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  

 











































