/*
 Ken lockett
 SDI -Section 3
 Functions Assignment
 1/26/15
 */

//1 Normal function
var total = totalIceCreamScoops(1, 1, 2);
totalIceCreamScoops(1,1,2); //arguments used
function totalIceCreamScoops (iceCreamScoops, whipCream, waffleCone) { //3 parameters used
    var totalIceCreamScoops = iceCreamScoops + 1 + 2
    console.log("Your total of Ice Cream scoops is " + iceCreamScoops + " plus a $" + whipCream +
    " of Whip Cream and a $" + waffleCone + " Waffle Cone.");

  return totalIceCreamScoops;//return
}
totalIceCreamScoops(4, 1, 2);// pass used
totalIceCreamScoops(7, 1, 2);//pass used
console.log(total);

//1 Anonymous Function
    var totalIceCreamScoops = function(iceCreamScoops, whipCream, waffleCone) {// 3 parameters

        var total = iceCreamScoops + whipCream + waffleCone;
    return total;
}
    var a = totalIceCreamScoops(1, 1, 2); // arguments

     console.log(a);

//validated 3 Prompts with loops
 var iceCreamScoops = 4;

var iceCreamScoops = prompt("Please put how many scoops of Ice Cream you would like!");

while(iceCreamScoops == ""){
         console.log("Left it Blank");
 iceCreamScoops = prompt("Please dont leave blank How many scoops would you like?");
}
 while (iceCreamScoops > 0){
     //console.log("left it blank")
     console.log("You have " + iceCreamScoops + " Scoops of Ice Cream");
     iceCreamScoops--;

 }

var whipCream = 4;

var whipCream = prompt("Please put how many Sprays of Whip Cream you would like!");

while(whipCream == ""){
    console.log("Left it Blank");
    whipCream = prompt("Please dont leave blank How many Sprays would you like?");
}
while (whipCream > 0) {
    //console.log("left it blank")
    console.log("You have " + whipCream + " Gentle Sprays of Whip Cream");

    whipCream--;
}

var cherries = 4;

var cherries = prompt("Please put how many cherries would like on top!");

while(cherries == ""){
    console.log("Left it Blank");
    cherries = prompt("Please dont leave blank How many Cherries would you like?");
}
while (cherries > 0) {
    //console.log("left it blank")
    console.log("You have " + cherries + " Cherries on top!");

    cherries--;
}

/*
 I tested prompts with putting in different values and all returned differently  in the loops and all
 prompts were while validated


  */