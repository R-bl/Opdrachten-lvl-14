function calculateSupply(age, ammountPerDay) {
    let maxAge = 100;
    let totalCookies = (ammountPerDay * 365) * (maxAge - age);
    let message = `You will need ${totalCookies} Cookies to last you until the ripe old age of '${maxAge}`;
    console.log(message);
  }
  
calculateSupply(30, 7);
calculateSupply(50, 40);
calculateSupply(10,22);


