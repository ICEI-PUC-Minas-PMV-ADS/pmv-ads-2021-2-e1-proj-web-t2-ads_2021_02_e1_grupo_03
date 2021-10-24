var btnLogar = document.querySelector("#btnlogar");
var btnCadastrar = document.querySelector("#btncadastrar");
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

const INDEX_URL = "index.html";

var body = document.querySelector("body");

btnLogar.addEventListener("click", function () {
    login();
});

btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});

btnCadastrar.addEventListener("click", function () {
    register();
});

function register() {
    var nomeRegistro = document.getElementById('regnome').value;
    var usuarioRegistro = document.getElementById('regemail').value;
    var senhaRegistro = document.getElementById('regsenha').value;
    localStorage.setItem('db_nome', nomeRegistro);
    localStorage.setItem('db_usuario', usuarioRegistro);
    localStorage.setItem('db_senha', senhaRegistro);
    const msg = document.getElementById('loginmessage');
    msg.innerHTML = 'Bem vindo, ' + nomeRegistro + '!';
    body.className = "sign-in-js";
}

function login(){
    var usuarioLogin = document.getElementById('logemail').value;
    var senhaLogin = document.getElementById('logsenha').value;
    var existe = consultarBanco(usuarioLogin, senhaLogin);
    if(existe){
         window.location = INDEX_URL;
    } else {
        alert('Usuário ou senha não reconhecido');
    }
}

function consultarBanco(login, senha){
    var usuarioCadastrado = localStorage.getItem('db_usuario');
    var senhaCadastrada = localStorage.getItem('db_senha');
    if(login == usuarioCadastrado && senha == senhaCadastrada){
        return true;
    } else {
        return false;
    }
}