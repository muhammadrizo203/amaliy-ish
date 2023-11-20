function lits1(){

var input =  document.getElementById('input')
var div2 =  document.getElementById('div2')
var div = document.createElement('div');
var h1 = document.createElement("h1")

div.style.width = "60%"
div.style.height = "10vh"
div.style.backgroundColor = "darkgray"
div.style.display = "inline-flex";
div.style.justifyContent = "end"
div.style.borderRadius = "8px"
div.style.marginTop = "10px" 
div.style.float = "right"


h1.innerText = input.value;



div.appendChild(h1)
div2.appendChild(div)



}