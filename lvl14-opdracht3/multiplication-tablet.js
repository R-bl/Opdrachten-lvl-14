const tableNine = 9;

for(i = 1; i <= 10; i++){
    const result = i * tableNine;
    console.log(`${tableNine} * ${i} = ${result}`);
}


let tables = [1,2,3,4,5,6,7,8,9,10,11];

for(i = 1; i <tables.length; i++){
    for(x = 1; x <tables.length; x++){
        const tableResults = i * x;
        console.log(`${i} * ${x} = ${tableResults}`);
    }
}
