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

    let mostrar_datos = async() => {
        const tbody = document.getElementById('tbody_clientes');
        let clientes = await master.listarClientes();
        tbody.innerHTML = '';
        clientes.forEach( (cliente, i) => {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = cliente.nombre_razon_social;
            fila.insertCell().innerHTML = cliente.cuit;
            fila.insertCell().innerHTML = cliente.celular;
            fila.insertCell().innerHTML = cliente.email;
            fila.insertCell().innerHTML = `<button id=clientes_${i} class="btn-ver-mas">+</button>`
        })
        const botonesMas = document.getElementsByClassName("btn-ver-mas");
        Array.from(botonesMas).forEach( (boton, i) => {
            boton.addEventListener("click", () => {
                if(document.getElementById(clientes[i].cuit) == null){
                    modal.classList.toggle("modal-close");
                    modalC.style.opacity = "0"
                    modalC.style.visibility = "hidden"
                    agregarPropietarios(clientes[i]);
                }
                else{
                    alert("El propietario ya está cargado")
                }
            })
        })
    };

    function agregarPropietarios(propietario) {
        const tbody = document.getElementById('tbody_propietarios')
        let fila = tbody.insertRow();
        //fila.setAttribute("id", propietario.cuit);
        fila.id = propietario.cuit
        fila.insertCell().innerHTML = propietario.nombre_razon_social;
        fila.insertCell().innerHTML = propietario.cuit;
        fila.insertCell().innerHTML = propietario.celular;
        fila.insertCell().innerHTML = propietario.email;
        fila.insertCell().innerHTML = `<button class="btn-borrar-fila">X</button>`
        const btnBorrar = document.getElementsByClassName("btn-borrar-fila")
        Array.from(btnBorrar).forEach( boton => {
            boton.addEventListener("click", () => {
                fila.innerHTML = "";
            })
        })
    }

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
