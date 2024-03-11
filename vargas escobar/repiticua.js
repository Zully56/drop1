let tentativas=0
let tabuada
for(let i =0; i<=10; i++){
     tabuada += "<p>2x" + i +"=" + (2*i) + "<p>"
}
document.getElementById("tabuada").innerHTML= tabuada

function adivinhacao(){
   let sugestaoNumero= parseInt(document.getElementById("numero").value)
   let numero = 5
   let aviso = document.getElementById("aviso")
   let sugestao= document.getElementById("sugestao")
 
   while(sugestaoNumero !== numero){
      aviso.innerHTML = "tentativa" + (tentativas++) + "<p>numero errado! tente novamente</p> "

      if(numero>sugestaoNumero){
         sugestao.innerHTML = "O numero é maior do que sugeriu"
      }
      else{
         sugestao.innerHTML = "O numero é menor do que sugeriu"
      }
      sugestaoNumero.value=""
      return 
   }  

   sugestao.innerHTML=""
    aviso.innerHTML="Parabens voce acertou na tentativa" + (tentativas) +"<h1> Felicidades </h1>"
} 
   

function conta(){
   let listaNum = parseInt(document.getElementById("contador").value)
   let decre = document.getElementById("decre")
   decre.innerHTML=""
    
   while(listaNum>0){
      decre.innerHTML += "<p>"+(listaNum--)+"</p>";
      
   }

} 