/*Ken lockett
  SDI- Section-3
  01/18/2015
 */
//Given variables listed
var cheesePizza =5;
var pepperoniPizza =10;
var deliveryFee = 3;
var totalAmount = deliveryFee + pepperoniPizza + cheesePizza*2 // 2 Different Arithmetic Operators

console.log(totalAmount)
//2 Different  Arithmetic Operators

totalAmount= deliveryFee - deliveryFee + cheesePizza + pepperoniPizza
console.log(totalAmount)

//2 Conditional Statements plus 1 with Else if
if(cheesePizza < pepperoniPizza){
//code performed if code is true
 console.log("Then buy 2 boxes ");
}

if(cheesePizza > pepperoniPizza){


  console.log("Then buy 1 box");

} else if(cheesePizza<=10){
  console.log("Then buy 2 Cheese Pizzas for $5(EACH) or 1 Pepperoni Pizza for $10");
//Code performed if false

}

//1 Ternary Conditional statement
(cheesePizza>10)? console.log("You can Buy 1 Cheese Pizza!"):console.log("Then buy 1 Pepperoni Pizza")

//1 logical Operator used
if(cheesePizza < pepperoniPizza && deliveryFee > 4){
  console.log("Then buy 1 cheese Pizza");
} else{
  console.log("Then go pickup your Pizza yourself")
}

//3 Validated Prompts
var cheesePizza = prompt("Please type in Cheese Pizza");

if(cheesePizza === ""){
  console.log("left it blank");

  cheesePizza = prompt("Please dont leave blank. Please type in Cheese Pizza!");

}

var pepperoniPizza = prompt("Please type in Pepperoni Pizza");

if(pepperoniPizza === ""){
  console.log("left it blank");

  pepperoniPizza = prompt("Please dont leave blank. Please type in Pepperoni Pizza!");

}

var deliveryFee = prompt("Please type in 3 for delivery fee");


if(deliveryFee === ""){
  console.log("left it blank");

  deliveryFee = prompt("Please dont leave blank. Please type in 3 for delivery fee!");

}
console.log("Your total amount is $" + totalAmount); //Concatenating console.log to Print total amount
alert("Your total amount is $" + totalAmount);      //Concatenating alert to show total amount



/* Many Test were ran and successful also correction were in the Arithmetic area. I also made some corrections with
the prompts

*/



