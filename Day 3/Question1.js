let num = parseInt(prompt("Enter a number of your choice", "0"));

function odd_Even(num1) {
    if (num1 != 0) {
        if (num1 % 2 == 0) {
            console.log(`The number entered is ${num1} and Number is even`)
        } else {
            console.log(`The number entered is ${num1} and Number is odd`)
        }
    } else {
        console.log("Please enter number other than zero")
    }
}

odd_Even(num);