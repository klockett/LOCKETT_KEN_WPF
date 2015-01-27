/*Ken lockett
1/24/15
SDI Section 3
Conditional Worksheet
 */


// Grade Letter Calculator
//Givens
//Grade in Percent
var grade = 93;

//Test what grade - normal grading scale
// A - 100- 90
// B 89-80
// C 79- 70
// D 69- 60
// F 59 AND UNDER

// If else if else statement

if(grade>=90){
    console.log("you have a"+grade+"%, which means you earned a(n)  A in the class!");

} else if(grade>=80){
    console.log("you have a"+grade+"%, which means you earned a(n)  B in the class!");


}else if(grade>=70) {
    console.log("you have a" + grade + "%, which means you earned a(n)  C" +in the class!");

}else if(grade>=60) {
    console.log("you have a" + grade + "%, which means you earned a(n)  D in the class!");

}else {
    console.log("you have a" + grade + "%, which means you earned a(n)  F in the class!");

}