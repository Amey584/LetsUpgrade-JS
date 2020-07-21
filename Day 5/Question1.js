//Question1 

//Array generation
function promptValidation(text) {
    let n;
    do {
        n = prompt(text);

        condition = (n == null) ? true : (n.trim().length == 0) ? true : false
    } while (condition);
    return n;
}

let n = parseInt(promptValidation("Enter a postive number n: "));

let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

//filtering the odd
let odd = arr.filter(el => el % 2 != 0);
console.log(odd);

//Cubing the filtered odd
let Cubes = odd.map(el => el ** 3);
console.log(Cubes);