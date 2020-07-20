// Sales Commission:

let Sales = parseInt(prompt("Enter Sales for the Year in Rs:"));

if((Sales!=null) && (Sales > 0)){
    if(Sales <= 5000){
        console.log(`Total Commission earned for sales of ${Sales} is ${calculateCommission(2,Sales)}`);
    }else if(Sales <= 10000){
        console.log(`Total Commission earned for sales of ${Sales} is ${calculateCommission(5,Sales)}`);
    }else if(Sales <= 20000){
        console.log(`Total Commission earned for sales of ${Sales} is ${calculateCommission(7,Sales)}`);
    }else{
        console.log(`Total Commission earned for sales of ${Sales} is ${calculateCommission(10,Sales)}`);
    }
}else{
    console.log("Please enter correct sales amount")
}

function calculateCommission(percentage, Sales){
    return (percentage*Sales*0.01).toFixed(2);
}