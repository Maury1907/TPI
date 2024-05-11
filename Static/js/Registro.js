let btnSend = document.querySelector(".login-button");

btnSend.addEventListener('click',function(){
    let email = document.querySelector("#email");
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    let repeatpassword = document.querySelector("#repeatpassword");
    //Expresiones regulares
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(username.value.trim().length);
    if(username.value.trim()=='' || username.value.trim().length < 3 ){
        document.querySelector("#error-username").innerHTML ="Debes completar el campo Usuario";
        // alert('ERROR! Debes completar el campo Nombre');
    }

    if(password.value.trim()==''){
        document.querySelector("#error-password").innerHTML ="Debes completar el campo Contraseña";
        // alert('ERROR! Debes completar el campo Apellido');
    }

    if(!emailRegex.test(email.value)){
        document.querySelector("#error-email").innerHTML ="El email no tiene un formato valido.";
        // alert('ERROR! Debes completar el campo Apellido');
    }
});