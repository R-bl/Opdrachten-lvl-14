function assignGrade(score) {
    for(i = 60; i <=100; i++){
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
    
}
console.log(i);
}
//assignGrade(i);
//console.log(assignGrade)
