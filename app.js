const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const option = document.querySelector("#select");
const mouseon = document.getElementById("mouseon");
const resultvalue = document.getElementById("resultvalue");



mouseon.addEventListener("mouseover", () =>{
  mouseon.innerHTML = "Now move out mouse from here!!!";
  mouseon.style.color = "red";
  mouseon.style.backgroundColor = "black";
  
  let sign = option.value;

  
  switch (sign) {
    case "+":
      resultvalue.innerHTML = Number(operand1.value) + Number(operand2.value);
      break;

    case "-":
      resultvalue.innerHTML = Number(operand1.value) - Number(operand2.value);
      break;

    case "*":
      resultvalue.innerHTML = Number(operand1.value) * Number(operand2.value);
      break;

    case "/":
      resultvalue.innerHTML = Number(operand1.value) / Number(operand2.value);
      break;

    case "%":
      resultvalue.innerHTML = Number(operand1.value) % Number(operand2.value);
      break;

    default:
      break;
  }
  

});
mouseon.addEventListener("mouseout", (event) =>{
  mouseon.innerHTML = "Move mouse here!!!";
  mouseon.style.color = "black";
  mouseon.style.backgroundColor = "white";

});




