const student = {
    name: "Helsinki",
    age : 24,
    projects: {
        diceGame : "Two player dice game using JavaScript",
        snakeGame : "snake Game using Python"
    }
}

//Destructuring the object:

let {name, age, projects:{diceGame,snakeGame}} = student;
console.log(`Name = ${name},
Age =${age},
Project1 =${diceGame},
Project2 =${snakeGame}.`)