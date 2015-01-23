/*Ken lockett
  SDI- Section-3
  01/18/2015
 */
//Given variables listed
var cheesePizza=5;
var pepperoniPizza=10;
var tip;
var deliveryFee="3";
var totalAmount;

//2 Different  Arithmetic Operators

totalAmount= deliveryFee - deliveryFee + cheesePizza + pepperoniPizza
console.log(totalAmount)

//2 Conditional Statements plus 1 with Else if
if(cheesePizza < pepperoniPizza){
//code performed if code is true
 console.log("Then buy 2 boxes ");
}

if(cheesePizza > pepperoniPizza){


  console.log("Then but 1 box");

} else if(cheesePizza<=10){
  console.log("Then buy 2 Cheese Pizzas for $5(EACH) or 1 Pepperoni Pizza for $10");
//Code performed if false

}

//1 Ternary Conditional statement
(cheesePizza>10)? console.log("You can Buy 1 Cheese Pizza!"):console.log("Then buy 1 Pepperoni Pizza")






