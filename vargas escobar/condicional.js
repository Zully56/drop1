function semaforo() {
    let vermelho = document.getElementById("vermelho").checked
    let amarelo = document.getElementById("amarelo").checked
    let verde = document.getElementById("verde").checked

    if (vermelho == true) {
        document.getElementById("mensagem").innerHTML = "Pare agora"
    }
    else if (amarelo == true) {
        document.getElementById("mensagem").innerHTML = "Tiempo de espera"
    } else {
        document.getElementById("mensagem").innerHTML = "Avance"
    }

}

switch(new Date().getDay()){
    case 0:document.getElementById("hoje").innerHTML="Hoje é Domingo"
    break
    case 1:document.getElementById("hoje").innerHTML="Hoje é Segunda "
    break
    case 2:document.getElementById("hoje").innerHTML="Hoje é Terça"
    break
    case 3:document.getElementById("hoje").innerHTML="Hoje é Quarta"
    break
    case 4:document.getElementById("hoje").innerHTML="Hoje é Quinta"
    break
    case 5:document.getElementById("hoje").innerHTML="Hoje é Sexta uuhuu!!"
    break
    case 6:document.getElementById("hoje").innerHTML="Hoje é Sabado"
    break
    
}