function Calcular(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let operacao = document.getElementById("operacao").value 
    let resultado = document.getElementById("resultado")
    let calculo 

    switch(operacao){
        case "+": calculo = num1+num2; break
        case "-": calculo = num1-num2; break
        case "*": calculo = num1*num2; break
        case "/": calculo = num1/num2; break
    }
    resultado.innerHTML= calculo
}