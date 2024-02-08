function validarEmail() {
    var emailInput = document.getElementById("email").value;
    var patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (patronEmail.test(emailInput)) {
        document.getElementById("resultado").innerHTML = "El correo electrónico es válido.";
    } else {
        document.getElementById("resultado").innerHTML = "El correo electrónico no es válido.";
    }
}