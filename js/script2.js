function validarRFC() {
    var rfcInput = document.getElementById("rfc").value;
    var patronRFC = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;

    if (patronRFC.test(rfcInput)) {
        document.getElementById("resultado").innerHTML = "El RFC es válido.";
    } else {
        document.getElementById("resultado").innerHTML = "El RFC no es válido.";
    }
}