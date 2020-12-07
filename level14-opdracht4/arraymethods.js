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
/* is hetzelfde als
color.forEach(function(element){
    console.log(element))*/