function precioAproximado() {
    // Obtener los valores de los campos del formulario
    var medida = parseFloat(document.getElementById("medida").value);
    var agua = document.querySelector('input[name="agua"]:checked');
    var tipo = document.getElementById("seleT").value;
    var nombre = document.getElementById("nombre").value.trim(); // trim evalua si hay espacios en blanco
    var apellido = document.getElementById("apellido").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var direccion = document.getElementById("dirreccion").value.trim();


    if (!nombre || !apellido || !telefono || !correo || !direccion || isNaN(medida) || !agua) {
        alert("Debe llenar todos los campos.");
        return;
    }
    //Obtiene el valor del radio button agua
    var aguaVal = agua.value;

    var servo = 2.51;
    var arduino = 6.49;
    var cable = 1.56;
    var sensor = 3.58;
    var bateria = 7.51;

    var res = 0;
    if (tipo === "cereales" || tipo === "hortalizas") {
        res = (medida * sensor) + arduino + (servo * 2) + cable + bateria;
    } else if (tipo === "frutales" || tipo === "raices") {
        if (medida >= 5) {
            res = ((medida / 5) * sensor) + arduino + (servo * 2) + cable + bateria;
        } else {
            res = sensor + arduino + (servo * 2) + cable + bateria;
        }
    } else if (tipo === "leguminosas") {
        if (medida >= 10) {
            res = ((medida / 10) * sensor) + arduino + (servo * 2) + cable + bateria;
        } else {
            res = sensor + arduino + (servo * 2) + cable + bateria;
        }
    }

    let mensaje = "<b>El precio estimado es: $" + res.toFixed(2) + "</b><br>";
    if (aguaVal === "no") {
        mensaje += "Nota: No es el precio final debido a que se debe considerar irregularidades de terreno y el acceso al agua.";
    } else {
        mensaje += "Nota: No es el precio final debido a que se debe considerar irregularidades de terreno.";
    }


    document.getElementById("labelResultado").innerHTML = mensaje;
    alert("Solicitud enviada. Recibirá un correo de nuestros asesores.");
}
