function validarNSS() {
    var nssInput = document.getElementById("nss").value;
    var patronNSS = /^[0-9]{11}$/;

    if (patronNSS.test(nssInput)) {
        document.getElementById("resultado").innerHTML = "El NSS es válido.";
    } else {
        document.getElementById("resultado").innerHTML = "El NSS no es válido.";
    }
}