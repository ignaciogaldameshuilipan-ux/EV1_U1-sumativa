
function mostrarDatos() {

    
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var edad = document.getElementById("edad").value;

    
    var resultado = document.getElementById("resultado");

    
    if (nombre == "" || correo == "" || edad == "") {
        resultado.innerHTML = "<p>Por favor completa todos los campos.</p>";
    } else {
        
        resultado.innerHTML =
            "<p>Datos recibidos:</p>" +
            "<p>Nombre: " + nombre + "</p>" +
            "<p>Correo: " + correo + "</p>" +
            "<p>Edad: " + edad + "</p>";
    }
}
