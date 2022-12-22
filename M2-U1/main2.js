function contarLetras() {
    var total = 249
    setTimeout(function () {

        var valor = document.getElementById("mensaje");
        var respuesta = document.getElementById("respuesta");
        var cantidad = valor.value.length;

        document.getElementById("respuesta").innerHTML = cantidad + "te quedan" + (total - cantidad);
        if (cantidad >= total) {
            respuesta.style.color = "red"
            document.getElementById(mensaje).disabled = true;
        }

)
};
}