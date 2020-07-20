let n = 100;
for(let i = 1 ; i<=100; i++){
    if(i%15 == 0)
        console.log(`The number is ${i} and output is: fizzbuzz`)
    else if(i%3 == 0)
        console.log(`The number is ${i} and output is: fizz`)
    else if(i%5 == 0)
        console.log(`The number is ${i} and output is: buzz`)
}