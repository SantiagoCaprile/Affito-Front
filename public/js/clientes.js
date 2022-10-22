import { Master } from '../../clases/master.js'
const master = new Master();
if (sessionStorage.getItem('user') === null) {
    window.location.href = './logIn.html';
}

window.onload = function() {
    const tbody = document.querySelector('tbody');
    const campoCuit = document.getElementById('cuit-cliente');
    const campoNombre = document.getElementById('nombre-cliente');
    const btnFiltrar = document.getElementById('btn-filtrar');
    const btnLimpiar = document.getElementById('btn-limpiar');
    let listarTodos = async() => {
        let clientes = await master.listarClientes();
        llenarTabla(clientes);
    };
    let llenarTabla = (clientes) => {
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
                window.location.href = `./infoCliente.html?id=${clientes[i].cuit}`;
                console.log(clientes)
            })
        })
    }
    listarTodos()

    btnFiltrar.addEventListener('click', async(e) => {
        e.preventDefault();
        const filtro = {
            cuit: campoCuit.value,
            nombre: campoNombre.value
        }
        if(filtro.cuit !== '' || filtro.nombre !== '') {
            const listaFiltrada = await master.filtrarClientes(filtro);
            llenarTabla(listaFiltrada);
        }
    });

    btnLimpiar.addEventListener('click', (e) => {
        e.preventDefault();
        campoCuit.value = '';
        campoNombre.value = '';
        listarTodos();
    });
};