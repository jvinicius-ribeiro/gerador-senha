let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#quantidade");
let password = document.querySelector("#senha");

let containerPassword = document.querySelector("#painel-senha");

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRTUVXWYZ0123456789!@#$%¨&*()-_+=";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {

    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert("Sua senha foi copiada!");
    navigator.clipboard.writeText(novaSenha);
}