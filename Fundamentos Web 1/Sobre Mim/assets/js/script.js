/**
 * JS é case sensitive
 * por tag: getElementByTagName()
 * por id: getElementById()
 * por nome: getElementsByName()
 * por classe: getElementsByClassName()
 * por seletor: querySelector()
 */

var nome = window.document.getElementById('nome')
var nomeOk = false
var email = document.querySelector('#email')
var emailOk = false
var assunto = document.querySelector("#assunto")
var assuntoOk = false
var mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 2){
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = "red"
        nomeOk = false
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0) {
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = "green"
        emailOk = true
    } else{
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = "red"
        emailOk = false
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 20 || assunto.value.length > 200){
        txtAssunto.innerHTML = 'O assunto precisa ter no mínimo 20 caracteres e no máximo 200!'
        txtAssunto.style.color = "red"
        assuntoOk = false
    } else {
        txtAssunto.innerHTML = 'Texto enviado!'
        txtAssunto.style.color = "green"
        assuntoOk = true
    }
}


function Enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado!')

    } else {
        alert('Preenchido incorretamente, tente novamente')
    }
}

function mapaZoom() {
    mapa.style.width = '700px'
    mapa.style.height = '500px'
}

function mapaNormal() {
    mapa.style.width = '500px'
    mapa.style.height = '350px'
}

