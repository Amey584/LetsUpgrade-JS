text = prompt("Enter your name: ", "Unknown");

if(text != null){
    console.log(`Hi ${text},
Welcome to the JavaScript course with LetsUpgrade`)

document.getElementById("greetings").innerHTML = `Hi, ${text}.
Welcome to the JavaScript course with LetsUpgrade !!`;
}
