/*
 Ken lockett
 SDI -Section 3
 Functions Assignment
 1/26/15
 */
var total = totalIceCreamScoops(1, 1, 2);
totalIceCreamScoops(1,1,2); //arguments used
function totalIceCreamScoops (iceCreamScoops, whipCream, waffleCone) { //3 parameters used
    var totalIceCreamScoops = iceCreamScoops + 1 + 2
    console.log("Your total of Ice Cream scoops is " + iceCreamScoops + " plus a $" + whipCream +
    " of Whip Cream and a $" + waffleCone + " Waffle Cone.");

  return totalIceCreamScoops;//return
}
totalIceCreamScoops(4, 1, 2);// pass used
totalIceCreamScoops(7, 1, 2);//pass ussed
console.log(total);

//1 Anonymous Function
    var totalIceCreamScoops = function(iceCreamScoops, whipCream, waffleCone) {

        var total = iceCreamScoops + whipCream + waffleCone
    return total;
}
    var a = totalIceCreamScoops(1, 1, 2);

     console.log(a);
