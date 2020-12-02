let favMovie ={
    title:'Joker',
    duration: 120,
    stars:['gary','marc','klaas'],
    
     printMovie() {
        console.log(`${this.title} lasts for ${this.duration} minutes`);
        let starsString = 'Stars: ';
        for (let i = 0; i < this.stars.length; i++) {
            starsString += this.stars[i];
            if (i != this.stars.length -1) {
                starsString += ' ';
            }
        }
        console.log(starsString);
    }
    
}
favMovie.printMovie();




