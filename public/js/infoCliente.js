import { Master } from '../../clases/master.js'

const master = new Master();

window.onload = function() {

    let cuit = window.location.search.split('=')[1];

    let busqueda = async() => {
        let cliente = await master.buscarCliente(cuit);
        return cliente;
    }

    busqueda()
    .then((cliente) => {
        document.getElementById("nombre-cliente").innerHTML = cliente.nombre_razon_social;
        document.getElementById("cuit-cliente").innerHTML = cliente.cuit;
        document.getElementById("iva-cliente").innerHTML = cliente.condicion_iva;
        document.getElementById("domicilio-cliente").innerHTML = cliente.domicilio.calle + " " + cliente.domicilio.altura + " " + cliente.domicilio.piso + " " + cliente.domicilio.dpto;
        document.getElementById("localidad-cliente").innerHTML = cliente.domicilio.localidad;
        document.getElementById("email-cliente").innerHTML = cliente.email;
        document.getElementById("cel-cliente").innerHTML = cliente.celular;
        document.getElementById("telefono-cliente").innerHTML = cliente.telefono;
    }).catch(err => {
        console.log(err);
    });

    document.getElementById("btn-volver").onclick = () => {
        window.location.href = "clientes.html";
    }
}