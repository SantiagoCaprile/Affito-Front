import { Master } from '../../clases/master.js'

const master = new Master();

window.onload = function() {
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

    mostrar_datos()
        .then(function(clientes){
            const botonesMas = document.getElementsByClassName("btn-ver-mas");
            let data = {
                clientes: clientes,
                botonesMas: botonesMas
            }
            return data;
        })
        .then(function(data){
            const botonesMas = data.botonesMas;
            const clientes = data.clientes;
            for (let i = 0; i < botonesMas.length; i++) {
                botonesMas[i].onclick = function(){
                    console.log(clientes[i].cuit);
                    window.location.href = `./infoCliente.html?id=${clientes[i].cuit}`;
                }
            }
        })
        .catch(function(error){
            console.log(error);
        });
};