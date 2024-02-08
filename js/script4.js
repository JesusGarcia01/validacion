function validarTelefono() {
    var telefonoInput = document.getElementById("telefono").value;
    var patronTelefono = /^[0-9]{10}$/;

    if (patronTelefono.test(telefonoInput)) {
        document.getElementById("resultado").innerHTML = "El número de teléfono es válido.";
    } else {
        document.getElementById("resultado").innerHTML = "El número de teléfono no es válido.";
    }
}