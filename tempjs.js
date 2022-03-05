let celsius=document.getElementById("celsius")
let fahrehnite=document.getElementById("fahrehnite")

celsius.oninput = () => {
   let output = ((parseFloat(celsius.value)*9 / 5)) +32;
   fahrehnite.value=parseFloat(output.toFixed(2));
}
fahrehnite.oninput = () => {
    let output = ((parseFloat(fahrehnite.value)-32)*5 / 9);
    celsius.value=parseFloat(output.toFixed(2));
 }