function validar() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    if (usuario == "alan" && contrasena == "8925") {
        alert("Bienvenido al sistema");
        window.location.href = "Bienvenido.html";
        return false;
    } else {
        alert("Usuario o contraseña incorrectos");
        return false;
    }
}

function comprar() {
    let total = 0;
    total += document.getElementById('p1').value * 1200;
    total += document.getElementById('p2').value * 950;
    total += document.getElementById('p3').value * 650;
    total += document.getElementById('p4').value * 1400;
    total += document.getElementById('p5').value * 450;
    document.getElementById('total').innerText = "Total: $" + total;
}