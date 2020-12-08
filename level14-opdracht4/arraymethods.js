//while loop 5 regels
let colors = ['yellow','blue','red','orange'];
let i = 0;
while(i < colors.length){
    console.log(colors[i]);
    i++;
}



//for loop 2 regels
for(i = 0; i < colors.length; i++){
    console.log(colors[i]);
}




// foreach method 1 regel



colors.forEach(element => console.log(element));


/* wat ik fijn vindt aan de foreach method is
   dat het kort geschreven kan worden, en dat er voor elk element in de array eigenlijk
   een eigen functie wordt gemaakt dat gelijk een waarde heeft, en een index
   */



let myObject = {name: 'Raymond', age: 30, city: 'Deventer',Music: 'House',Food: 'ClubSandwich'};

for(i in myObject){
    console.log(`${i} : ${myObject[i]}`);
}
/*Hier maak ik gebruik van de for in method.
  i is hier de property van myObject*/

   
   

