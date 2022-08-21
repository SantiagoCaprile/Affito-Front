import { Cliente } from '../../clases/cliente.js'

window.onload = function() {
    const btn = document.getElementById("btn-crear-cliente");
    const cuit = document.getElementById('cuit')
    const nombre = document.getElementById('nombre')
    const cel = document.getElementById('cel')
    const tel = document.getElementById('tel')
    const mail = document.getElementById('mail')
    const iva = document.getElementById('iva')
    const calle = document.getElementById('calle')
    const altura = document.getElementById('altura')
    const piso = document.getElementById('piso')
    const dpto = document.getElementById('dpto')
    const localidad = document.getElementById('localidad')
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        const cliente = new Cliente(
            cuit.value,
            nombre.value,
            cel.value,
            tel.value,
            mail.value,
            iva.value,
            calle.value,
            altura.value,
            piso.value,
            dpto.value,
            localidad.value
        )
        cliente.guardarCliente()
        alert("Cargado correctamente")
        window.location.href = "/public/clientes.html"

    });
};