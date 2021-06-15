function factorial(num) {
    var total = 1;
    if (num >= 1){
        for (let i = 1; i <= num; i++) {          
          total = total * i
        }
    } else if( num = 0){
         total = total;
    } else total = "Input a valid number"

   return total;   
}


function combination(num) {
    const output = factorial(2 * num) / (factorial(num + 1) * factorial(num));
    console.log(output)
}

combination(2)