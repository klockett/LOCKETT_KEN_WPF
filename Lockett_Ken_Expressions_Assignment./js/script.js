// Ken Lockett 01/14/2015 Expressions_Assignment

// Price for Air Jordan shoes plus tax if applicable.
// Givens below

var airJordanShoeCost = 200; // Given-Shoe cost $200.00
var shipCost = 3;             // Given- Ship Cost $3.00
var tax = 1.09;               // Given-tax Cost = 1.09
var totalCost;                // Given total Cost

var totalCost = airJordanShoeCost * tax + shipCost;  // shoe cost  was multiplied by tax cost plus ship cost
                                                   // 2-Arithmetic operators used in above variable
//console.log(totalCost);        //console.log was ran and total came to $221.00

//Product Arrays with Product Styles and cost
var airJordanStylesAndCost = ["Air JordanRetro 1 $200", "Air JordanRetro 4 $200","Air Jordan Retro 11 $200"];

//console.log(airJordanStylesAndCost);            // Console.log was ran for arrays and each item was listed in test

// A String  variable for output
var airJordanShoeCost= prompt("Please input the cost of your shoes 200");
var tax= prompt("Please input the \(State Tax rate of 1.09\).\n A $3.00 Shipping charge also will be added")
var totalCost = airJordanShoeCost * tax + shipCost;

console.log(totalCost);
