//Continuosly prompt the user till he enters number greater than 100

let Num; 
let condition

 do{
    Num  = prompt("Enter a number greater than 100");
    // console.log(Num)
    // console.log(parseInt(Num))
    condition = (Num == null) ? true :(Num.trim().length == 0)? true:(parseInt(Num) <= 100)? true: false
}while(condition);
 

console.log(`Validation Completed\nNumber = ${Num}`);
