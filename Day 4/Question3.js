//Spread Operator with arrays

let shoppingList = ["Milk", "Bread", "Egg", "Cheese"];

let shoppingBasket = ["Peanut Butter", "Jam", "Musley", ...shoppingList,"Dry fruits"];

console.log(shoppingBasket);

//Method 2: concat operation.

shoppingBasket = ["Wafers"];
shoppingBasket = shoppingBasket.concat(shoppingList);
console.log(shoppingBasket);

//Observation:

// concat()' will add the elements at the end of the array while spread operator can be used to add elements at any part of the array.

//While appending string to an array using spread operator has to be cautious as spread literally spread the string to letters and add it to the array. Concat() will add the string as a single word.

