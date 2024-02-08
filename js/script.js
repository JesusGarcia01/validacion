function validarCurp() {
    var curpInput = document.getElementById("curp").value;

    if (curpInput.length >= 16 && curpInput.length <= 18) {
        document.getElementById("resultado").innerHTML = "La CURP es válida.";
    } else {
        document.getElementById("resultado").innerHTML = "La CURP no es válida.";
    }
}