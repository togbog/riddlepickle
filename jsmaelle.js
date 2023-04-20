var minion = "SWIMS";
var theDiv = document.getElementById("riddlequestion");
var content = document.createTextNode("What word looks the same upsidedown and backwards?");
theDiv.appendChild(content);

window.onload = function() {
  document.getElementById("text1").focus();
  document.getElementById("text2").disabled = true;
  document.getElementById("text3").disabled = true;
  document.getElementById("s2").style.display="none";
  document.getElementById("s3").style.display="none";
}

function hi() {
    console.log("Billy");
    let answer1 = document.getElementById("text1")
    console.log(answer1.value)
    let answer1text=answer1.value;
    let answer1uc=answer1text.toUpperCase();
    console.log(answer1uc);

    if (minion == answer1uc) {
    console.log("You Won")
     document.getElementById("text1").disabled = true;
     document.getElementById("text2").disabled = true; 
     document.getElementById("text3").disabled = true;
   	 document.getElementById("s1").style.display="none";
   } 
    else{
    console.log("You're Wrong")
      document.getElementById("text1").disabled = true;
      document.getElementById("text2").disabled = false;
     	document.getElementById("s2").style.display="inline-block";
      document.getElementById("s1").style.display="none";
      document.getElementById("text2").focus();
    }
}
function hi2() {
    console.log("Billy2");
    let answer2 = document.getElementById("text2")
    console.log(answer2.value)
    let answer2text=answer2.value;
    let answer2uc=answer2text.toUpperCase();
    console.log(answer2uc);

    if (minion == answer2uc) {
    console.log("You Won")
     document.getElementById("text2").disabled = true;
   document.getElementById("text3").disabled = true; 
   	document.getElementById("s2").style.display="none";
   } 
    else{
    console.log("You're Wrong")
    document.getElementById("text2").disabled = true;
     document.getElementById("text3").disabled = false;
     	document.getElementById("s3").style.display="inline-block";
      	document.getElementById("s2").style.display="none";
        document.getElementById("text3").focus();
    }
}
function hi3() {
    console.log("Billy3");
    let answer3 = document.getElementById("text3")
    console.log(answer3.value)
    let answer3text=answer3.value;
    let answer3uc=answer3text.toUpperCase();
    console.log(answer3uc);

    if (minion == answer3uc) {
    console.log("You Won")
     document.getElementById("text1").disabled = true;
   document.getElementById("text2").disabled = true;
   document.getElementById("text3").disabled = true;
   	document.getElementById("s3").style.display="none";
   } 
    else{
    console.log("You're Wrong")
    document.getElementById("text3").disabled = true;
      	document.getElementById("s3").style.display="none";
    }
}

