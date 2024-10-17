

/* */
document.title = 'Iniciar sesion';
//-------------------------------------------------------------------

//Encontrar el contenedor principal para el formulario
const container = document.createElement('div');
container.style.margin = '20px';


//cREAR TITULO
const title = document.createElement("h2");
title.textContent = 'Iniciar sesion';
container.appendChild(title);

//Crear el formulario
const form = document.createElement('form');

//Crear campo de nombre de usuario
const usernamelabe1 = document.createElement('label');
usernamelabe1.textContent = 'Nombre de usuari@';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;

form.appendChild(usernamelabe1);
form.appendChild(usernameInput);


//Crear campo de contraseña
const passwordLbael1 = document.createElement('label');
passwordLbael1.textContent = 'Contraseña';
const passwordInput = document.createElement('input');
passwordInput.type = 'text';
passwordInput.required = true;

form.appendChild(passwordLbael1);
form.appendChild(passwordInput);


//Crear boton de envio
const submitButton = document.createElement('button');
submitButton.textContent = 'Iniciar sesion';
form.appendChild(submitButton);


//Mnesaje de respuesta
const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

//Agregar el contenedor al cuerpo del documento
document.body.appendChild(container);

//Datos de inicio de sesion redefinida
const validaUser = 'xana';
const validaPassword = '1234';

// vaidar el user y el password
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //validar el nombre y el pass
    if(usernameInput.value === validaUser && passwordInput.value === validaPassword){
        message.textContent = '¡Bienvenida!';
        message.style.color = 'pink'

    } else {
        message.textContent = 'Nombre de usuario o contraeña incorrecta';
        message.style.color = 'blue';
    }

    //limpiar los input
    usernameInput.value = '';
    passwordInput.value = '';
})




