import { Master } from '../../clases/master.js'
const master = new Master();
if (sessionStorage.getItem('user') === null) {
    window.location.href = './logIn.html';
}

window.onload = function() {
    const tbody = document.querySelector('tbody');
    let mostrar_datos = async() => {
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
                window.location.href = `./infoCliente.html?id=${clientes[i].cuit}`;
                console.log(clientes)
            })
        })
    };

    mostrar_datos()
};