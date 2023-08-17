document.getElementById("Good Morning Kenya").style.color = "blue";
document.getElementById("Good Morning Kenya").style.textDecoration = "underline";

document.getElementById("hello2").innerText = "Chicken Wings";
document.getElementById("hello3").innerText = 3



const firstName = "Thomas";
const lastName = "Kimani";

const rent= 400;
const fuel = 500;

var total = rent + fuel;

document.getElementById("hello4").innerText = total;
document.getElementById("hello5").innerText = "This is a function"

document.getElementById("closebox").onclick = function(){
    document.getElementById("navbox").style.display = "none";

    document.getElementById("closebox").style.display = "none";
    document.getElementById("openbox").style.display = "block";
}

document.getElementById("openbox").onclick = function(){
    document.getElementById("navbox").style.display = "block";

    document.getElementById("openbox").style.display = "none";
    document.getElementById("closebox").style.display = "block";
}







