let marks = parseInt(prompt("Enter the marks obtained out of 100:"));

/* if (marks <= 100) {
    if (marks >= 75)
        console.log(`Marks are ${marks} and grade is O`);
    else if (marks > 59)
        console.log(`Marks are ${marks} and grade is A`);
    else if (marks > 49)
        console.log(`Marks are ${marks} and grade is B`);
    else if (marks > 34)
        console.log(`Marks are ${marks} and grade is C`);
    else
        console.log(`Marks are ${marks} and grade is F`);
}else{
    console.log("Invalid Marks")
} */

(marks <= 100) ? (marks >= 75) ? console.log(`Marks are ${marks} and grade is O`) : (marks > 59) ? console.log(`Marks are ${marks} and grade is A`):(marks > 49) ? console.log(`Marks are ${marks} and grade is B`) : (marks > 34) ? console.log(`Marks are ${marks} and grade is C`) :console.log(`Marks are ${marks} and grade is F`)
: console.log("Invalid Marks");


