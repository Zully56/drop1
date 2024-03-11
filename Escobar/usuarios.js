class Usuario{
    constructor(nome, sobrenome, idade, altura){
        this.nome = nome
        this.sobrenome = sobrenome 
        this.idade = idade 
        this.altura = altura
    }
}

function carregaUsuarios(){
    fetch("usuarios.json")
       .then(response => response.json())
       .then(usuarios => {
           usuarios.forEach(usuario => {
              const usuario = new Usuario(usuario.nome, usuario.sobrenome, usuario.idade, usuario.altura)
              addUsuarioNaTabela(usuario)
           });
       })

}  

function addUsuarioNaTabela(usuario){
    const tabelaUsuario = document.getElementById("tabelaUsuarios2")
    const linhaUsuario = document.createElement('tr')
    linhaUsuario.className = "linhas"
    linhaUsuario.innerHTML = 
    `
       <td> ${usuario.nome} </td>
       <td> ${usuario.sobrenome} </td>
       <td> ${usuario.idade} </td>
       <td> ${usuario.altura} </td>
    `
    tabelaUsuario.appendChild(linhaUsuario);
}

window.onload = carregaUsuarios;