function cadastrarUsuario(){
    let usuario = {
        nome : "",
        sobrenome: "",
        idade:0,
        altura: 0,
        testeIdade: function(){
           if(this.idade>=18){
              return " Este usuario é maior de idade"
           }
           else{
            return " Este usuario é menor de idade"
           }
        }
    };
    usuario.nome =  document.getElementById("nome").value
    usuario.sobrenome =  document.getElementById("sobrenome").value
    usuario.idade =  document.getElementById("idade").value
    usuario.altura =  document.getElementById("altura").value

    document.getElementById("informacoes").innerHTML=
    "O usuario " + usuario.nome 
    + "<br><br> de sobrenome  " + usuario.sobrenome
    + "<br><br> com idade de " + usuario.idade
    + "<br><br> e altura de " + usuario.altura + " foi inscrito "
    +"<br><br>" + usuario.testeIdade()
}
function usuario(nome, sobrenome, idade, altura){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.altura = altura;
}

const listaUsuarios = []

function cadastrarListaUsuario(){
    let tabelaUsuarios = document.getElementById("tabelaUsuarios")
    
    let nome = document.getElementById("nome2").value
    let sobrenome =  document.getElementById("sobrenome2").value
    let idade = document.getElementById("idade2").value
    let altura = document.getElementById("altura2").value

    const usuarioPreenchido = new usuario(nome,sobrenome,idade,altura)

    listaUsuarios[listaUsuarios.length]=usuarioPreenchido
    
    tabelaUsuarios.innerHTML += "<tr>"
                                +"<td>"+ usuarioPreenchido.nome+ "</td>"
                                +"<td>"+ usuarioPreenchido.sobrenome + "</td>"
                                +"<td>"+ usuarioPreenchido.idade + "</td>"
                                +"<td>"+ usuarioPreenchido.altura + "</td>"
                                +"</tr>"
}
    document.getElementById("teste").innerHTML= listaUsuarios[0].nome + 
    listaUsuarios[1].nome
