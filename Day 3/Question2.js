let OSver = prompt("Enter OS name and version separated by a space.");

// console.log(OSver.length);
if((OSver!=null) && (OSver.length > 0)){
    console.log(`The OS name is ${OSver.split(" ")[0]} and version is ${OSver.split(" ")[1]}. `);
}else{
    console.log("Invalid Input, Please re-enter.")
}
