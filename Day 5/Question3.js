//Question 3

async function fetchtodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}

fetchtodos();

// //method 2:

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(response => response.json())
// .then(data=>console.log(data))


