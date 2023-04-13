
// function displayName(){
//     warriorClass = document.getElementById("myInput").value;
//     console.log(typeof(warriorClass))
//     document.getElementById("myClass").textContent = warriorClass;
//     console.log(warriorClass);

// }

// document.getElementById("myButton").addEventListener("click", displayName);

//Create a small program to calculate the hypo of a triangle

/*

Divide the problem in small sections

1- Collect user input a & b legs
2- Manipulate date types
3- Compute equation
4- Display values
*/

// let a, b, hypo;

// a = Number(window.prompt("Enter the dimension of a: "));
// b = Number(window.prompt("Enter the dimension of b; "));

// hypo = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Side C: ", hypo);
// alert(hypo);

// 1- Create the html to let the user enter the information
// 2- Create functions to collect information from html elements
let a, b, c;


function calculateValue (){
    a = document.getElementById("aInput").value;
    a = Number(a);
    b = document.getElementById("bInput").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("result").textContent = "Side C = " + c;
}

document.getElementById("myButton").addEventListener("click", calculateValue);

