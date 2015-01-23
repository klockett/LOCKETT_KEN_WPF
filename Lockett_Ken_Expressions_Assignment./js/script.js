/* Ken Lockett
SDI Section
01/14/2015
Expressions_Assignment
 */

// Price for Air Jordan shoes plus tax if applicable.
// Givens below

var airJordanShoeCost = 200; // Given-Shoe cost $200.00, and also declared and defined on the same lime
var shipCost = 3;             // Given- Ship Cost $3.00, and also declared and defined on the same lime
var tax = 1.09;               // Given-tax Cost = 1.09, and also declared and defined on the same lime
var totalCost;                // Given total Cost

var totalCost = airJordanShoeCost * tax + shipCost;  // shoe cost  was multiplied by tax cost plus ship cost
                                                   // 2-Arithmetic operators used in above variable
//console.log(totalCost);        //console.log was ran and total came to $221.00

//Product Arrays with Product Styles and cost
var airJordanStylesAndCost = ["Air JordanRetro 1 $200", "Air JordanRetro 4 $200","Air Jordan Retro 11 $200"];

console.log(airJordanStylesAndCost);            // Console.log was ran for arrays and each item was listed in test

// A String  variable for output
prompt("Please input the cost of your shoes 200");//This prompt will ask to iput 200 the cost of the shoe
prompt("Please input the \(Sales Tax rate of 1.09\)");//This prompt will ask to input the preset sales tax of 1.09
prompt("Pls add 3 to Confirm your $3 Shipping Cost");//This prompt will ask you to input 3 to confirm $3 shipping fee

var totalCost = airJordanShoeCost * tax + shipCost;
alert("Your total is $" +totalCost); //Concatenating was used in alert to display total amount including shipping fee.
console.log("Your total is $" +totalCost);      //Concatenating was used for to display total amount on print out

// Assignment Operators
//var totalCost = 221;
totalCost = totalCost - totalCost + shipCost + tax * airJordanShoeCost;// more than 2 assignment operators used
console.log(totalCost);
