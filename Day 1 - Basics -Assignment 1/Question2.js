// var, let and const

/* 
//var:
1. global scope
2. can be updated and declared again
3. can be declared without intializing

//let:
1. local scope
2. can be updated, but cannot be declared again
3. can be declared without intializing

//const:
1. local scope
2. niether can be updated nor declared again
3. must be initialized at the time of declaration
 */

/****** REMOVE COMMENTED CODE TO CHECK ERRORS *********/

var a = 10.5
console.log(a);
a = a-4.3;
console.log(a);
var a = "test_string"
console.log(a);
var b;

//block of code (local)
console.group("Checking let keyword")
{
    let a = "local"
    console.log("local value of a : " +a); 

    a = a +"train";
    console.log(a);
   // let a = true;      //Cannot be declared again
    let b;
   
}
console.groupEnd("Checking let keyword")
console.log(a);  //global variable value 

//block of code (local)
console.group("Checking const keyword")
{
    const a = 9;
    console.log("local value of a : " +a);

    // a = 14;           // updating and redeclaring not allowed for const
    //const a = true;      //Cannot be declared again
    //const b;             //must be initialized at the time of declaration 
   
}
console.groupEnd("Checking const keyword")
console.log(a);  //global variable value 


