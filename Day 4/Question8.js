//Using arrow functions.........

/* function ask(question, yes, no){
    if (confirm(question)){
        yes()
    }else{
        no()
    }
}

ask("Do you agree", function(){alert("You Agreed.")}, function () {alert("You cancelled the execution.")}) */

let ask = (question, yes, no) => (confirm(question))? yes(): no()

ask("Do you agree", () => alert("You Agreed."),  () => alert("You cancelled the execution."));