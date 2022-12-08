let arrSuit = ["&#9829", "&#9830", "&#9827", "&#9824"]	

let tern = document.getElementsByClassName("tern");
let allside = document.getElementsByClassName("allside");
let check = document.getElementById("inp");
let attemp = document.getElementById("attempts");
let result = document.getElementById("result");

attemp = 0;

check.addEventListener("click", function(){

    attemp ++;
	document.getElementById("attempts").innerHTML = "Спроба " + attemp + " з 3";	
	for (let i = 0; i < 18; i++){
	let temp = Math.floor(Math.random() * arrSuit.length);			
	allside[i].innerHTML = arrSuit[temp];			
	if (arrSuit[temp] == "&#9829" || arrSuit[temp] == "&#9830")
	{
    allside[i].style.color = "red";
    }
	else
	{
	allside[i].style.color = "black";
	}					
    }
 	if (attemp == 3){
		document.getElementById("inp").disabled = true;
	}
});