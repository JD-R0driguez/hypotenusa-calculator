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

