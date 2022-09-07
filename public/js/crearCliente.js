import { Cliente } from '../../clases/cliente.js'
import { Master } from '../../clases/master.js'

const master = new Master();

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

    //si recibe un cuit por el query string
    let ncuit = window.location.search.split('=')[1];
    let busqueda = async() => {
        let cliente = await master.buscarCliente(ncuit);
        return cliente;
    }

    if(ncuit) { //llena todos los campos con el cliente recibido
        busqueda()
        .then((cliente) => {
            if(cliente == null) {
                throw new Error("No se encontró el cliente")
            }
            nombre.value = cliente.nombre_razon_social;
            cuit.value = cliente.cuit;
            cuit.disabled = true;
            iva.value = cliente.condicion_iva;
            mail.value = cliente.email;
            cel.value = cliente.celular;
            tel.value = cliente.telefono;
            localidad.value = cliente.domicilio.localidad;
            calle.value = cliente.domicilio.calle;
            altura.value = cliente.domicilio.altura;
            piso.value = cliente.domicilio.piso;
            dpto.value = cliente.domicilio.dpto;
        })
        .then(() => {
            document.getElementsByTagName("h1")[0].innerHTML = "Editar cliente";
            document.getElementsByTagName("h2")[0].innerHTML = "Aqui puede modificar los datos del cliente";
            btn.innerHTML = "Editar cliente";
            btn.onclick = (e) => {
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
                cliente.editarCliente();
                alert("Editado correctamente")
                window.location.href = "/public/clientes.html"
            }
        })
        .catch(err => {
            console.log(err);
            document.getElementsByTagName("h1")[0].innerHTML = "Error";
            document.getElementsByClassName("contenido")[0].innerHTML = "No se encontro el cliente";
        });
    } else { //si no recibe un cuit por el query string
        btn.onclick = (e) => {
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
        };
    }
};