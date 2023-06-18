var spanNombre = document.getElementById('errorNombre');
var spanApellido = document.getElementById('errorApellido');
var spanEmail = document.getElementById('errorEmail');

var inputNombre = document.getElementById('nombre');
var inputApellido = document.getElementById('apellido');
var inputEmail = document.getElementById('email');

const form = document.getElementById('formulario');
form.noValidate = true;

inputNombre.oninput = function () {
    validarNombre();
};
inputApellido.oninput = function () {
    validarApellido();
};
inputEmail.oninput = function () {
    validarEmail();
};

function validarNombre() {
    if (!inputNombre.value) {
        spanNombre.style.display = "block"
        spanNombre.innerHTML = 'Rellene este campo';
        inputNombre.classList.add('input-nombre')
    } else if
        (!comprobarPatronNombre()) {
        spanNombre.style.display = "block"
        spanNombre.innerHTML = 'Nombre inv&aacute;lido';
        inputNombre.classList.add('input-nombre')
    } else {
        spanNombre.style.display = "none"
        spanNombre.innerHTML = '';
    }
}

function validarApellido() {
    if (!inputApellido.value) {
        spanApellido.style.display = "block"
        spanApellido.innerHTML = 'Rellene este campo';
        inputApellido.classList.add('input-apellido')
    } else if
        (!comprobarPatronApellido()) {
        spanApellido.style.display = "block"
        spanApellido.innerHTML = 'Apellido inv&aacute;lido';
        inputApellido.classList.add('input-apellido')
    } else {
        spanApellido.style.display = "none"
        spanApellido.innerHTML = '';
    }
}

function validarEmail() {
    if (!inputEmail.value) {
        spanEmail.style.display = "block"
        spanEmail.innerHTML = 'Rellene este campo';
        inputEmail.classList.add('input-email')
    } else if
        (!comprobarPatronEmail()) {
        spanEmail.style.display = "block"
        spanEmail.innerHTML = 'Email inv&aacute;lido';
        inputEmail.classList.add('input-email')
    } else {
        spanEmail.style.display = "none"
        spanEmail.innerHTML = '';
    }
}

function comprobarPatronNombre() {
    var pattern = /^[A-Za-zÀ-ÿ]+$/;
    return pattern.test(inputNombre.value);
}

function comprobarPatronApellido() {
    var pattern = /^[A-Za-zÀ-ÿ]+$/;
    return pattern.test(inputApellido.value);
}

function comprobarPatronEmail() {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(inputEmail.value);
}
