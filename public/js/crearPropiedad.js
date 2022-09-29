import { Propiedad } from '../../clases/propiedad.js';
import { Master } from '../../clases/master.js'

const master = new Master();

window.onload = function() {
    document.getElementById("propietario-box").style.display = "none";
    const tipo = document.getElementById("tipo-propiedad");
    const dimension = document.getElementById("m2");
    const estado = document.getElementById("estado");
    const precio = document.getElementById("precio");
    const moneda = document.getElementById("moneda");
    const descripcion = document.getElementById("descripcion")
    const localidad = document.getElementById("localidad")
    const calle = document.getElementById("calle");
    const altura = document.getElementById("altura");
    const piso = document.getElementById("piso")
    const btnGuardar = document.getElementById("btn-crear-propiedad");
    // Casa muy grande con doble cochera
    btnGuardar.addEventListener("click", function(e) {
        e.preventDefault()
        const prop = new Propiedad(
            descripcion.value,
            dimension.value,
            tipo.value,
            calle.value,
            altura.value,
            piso.value,
            dpto.value,
            localidad.value,
            estado.value,
            precio.value,
            moneda.value,
            null //cambiar cuando esté hecho en el enlace
        )
        prop.guardarPropiedad()
        alert("Cargada correctamente");
        window.location.href = "/public/index.html";
    });
    let cerrar = document.querySelectorAll(".close")[0];
    let abrir = document.querySelectorAll(".cta")[0];
    let modal = document.querySelectorAll(".modal")[0];
    let modalC = document.querySelectorAll(".modal-container")[0];

    
    const tbody = document.querySelector('tbody');
    let mostrar_datos = async() => {
        let clientes = await master.listarClientes();
        tbody.innerHTML = '';
        for (let i = 0; i < clientes.length; i++) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = clientes[i]['nombre_razon_social'];
            fila.insertCell().innerHTML = clientes[i]['cuit'];
            fila.insertCell().innerHTML = clientes[i]['celular'];
            fila.insertCell().innerHTML = clientes[i]['email'];
            fila.insertCell().innerHTML = `<button id=clientes_${i} class="btn-ver-mas">+</button>`
        }
        return clientes;
    };
    
    abrir.addEventListener("click", function(e){
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
        mostrar_datos();
    })
    cerrar.addEventListener("click", function(){
        modal.classList.toggle("modal-close");
        modalC.style.opacity = "0"
        modalC.style.visibility = "hidden"
    })
}
