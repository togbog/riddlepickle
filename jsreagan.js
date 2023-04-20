var Bob = "SWIMS"


window.onload = function() {
   document.getElementById("Answer1").focus();
  document.getElementById("Answer2").disabled = true;
  document.getElementById("Answer3").disabled = true;
 document.getElementById("submit2").style.display = "none";
 document.getElementById("submit3").style.display = "none";
console.log("page is loaded");
}

function wrong() {
	console.log("CATS UR BUTT")
	
  let Answer1 = document.getElementById("Answer1")
  
  console.log(Answer1.value);
  
  let Answer1text=	Answer1.value
	let Answer1uc = Answer1text.toUpperCase();
	console.log(Answer1uc);

if (Answer1uc == Bob) {
  console.log("Match");
  document.getElementById("submit1").style.display = "none"; 
    document.getElementById("Answer2").style.display = "none"; 
      document.getElementById("Answer3").style.display = "none"; 
} 
else {
console.log("Wrong HEHE");
  document.getElementById("Answer2").disabled = false;
   document.getElementById("Answer1").disabled = true;
  document.getElementById("Answer3").disabled = true;
 document.getElementById("submit1").style.display = "none";
 document.getElementById("submit2").style.display = "inline-block";
  document.getElementById("submit3").style.display = "none";
    document.getElementById("Answer2").focus();
}
}

function bong() {
	console.log("CATS UR BUTT")
	
  let Answer2 = document.getElementById("Answer2")
  
  console.log(Answer2.value);
  
  let Answer2text=	Answer2.value
	let Answer2uc = Answer2text.toUpperCase();
	console.log(Answer2uc);

if (Answer2uc == Bob) {
  console.log("Match");
  document.getElementById("submit2").style.display = "none"; 
    document.getElementById("Answer1").style.display = "none"; 
      document.getElementById("Answer3").style.display = "none"; 
        document.getElementById("Answer2").disabled = true;
} 
else {
console.log("Wrong HEHE");
  document.getElementById("Answer2").disabled = true;
   document.getElementById("Answer1").disabled = true;
  document.getElementById("Answer3").disabled = false;
 document.getElementById("submit1").style.display = "none";
 document.getElementById("submit3").style.display = "inline-block";
  document.getElementById("submit2").style.display = "none";
    document.getElementById("Answer3").focus();
}
}

function kong() {
	console.log("CATS UR BUTT")
	
  let Answer3 = document.getElementById("Answer3")
  
  console.log(Answer3.value);
  
  let Answer3text=	Answer3.value
	let Answer3uc = Answer3text.toUpperCase();
	console.log(Answer3uc);

if (Answer3uc == Bob) {
  console.log("Match");
  document.getElementById("submit3").style.display = "none";
    document.getElementById("Answer2").style.display = "none";
     document.getElementById("Answer1").style.display = "none";
      document.getElementById("Answer3").disabled = true;
} 
else {
console.log("SUCKS TO SUCK UR REALLY BAD AT THIS");
  document.getElementById("Answer3").disabled = true;
 document.getElementById("submit3").style.display = "none";
}
}

var theDiv = document.getElementById("riddlequestion");
var content = document.createTextNode("What word looks the same upsidedown AND backwards?");
theDiv.appendChild(content)


var Fish = Bob.length
console.log(Fish)

for (let i = 0; i < Fish; i++) {
var Frog = Bob.charAt([i])
console.log(Frog);}
