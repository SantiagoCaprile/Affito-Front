import { Cliente } from '../../clases/cliente.js'
import { Master } from '../../clases/master.js'

const master = new Master();

window.onload = function() {
    const btn = document.getElementById("btn-crear-cliente");
    const btnCancelar = document.getElementById("btn-cancelar");
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

    let validarNombre = () => {
        let valido = true;
        let error = document.getElementById("nombre-error");
        error.classList.add("oculto");
        if(nombre.value.length > 60){
            valido = false;
            error.innerHTML = "El nombre no puede tener más de 60 caracteres";
            error.classList.remove("oculto");
        } else if (nombre.value.length == 0) {
            valido = false;
            error.innerHTML = "El nombre no puede estar vacío";
            error.classList.remove("oculto");
        }
        return valido;
    }

    let validarCuit = () => {
        let valido = true;
        let error = document.getElementById("cuit-error");
        error.classList.add("oculto");
        if(cuit.value.length > 11){
            valido = false;
            error.innerHTML = "El CUIT/CUIL no puede tener más de 11 caracteres";
            error.classList.remove("oculto");
        } else if (cuit.value.length == 0) {
            valido = false;
            error.innerHTML = "El CUIT/CUIL no puede estar vacío";
            error.classList.remove("oculto");
        }
        return valido;
    }

    let validarIVA = () => {
        let valido = true;
        let error = document.getElementById("iva-error");
        error.classList.add("oculto");
        if(iva.value == ""){
            valido = false;
            error.innerHTML = "Debe seleccionar una opción";
            error.classList.remove("oculto");
        }
        return valido;
    }

    let validarMail = () => {
        let valido = true;
        let error = document.getElementById("mail-error");
        error.classList.add("oculto");
        if(mail.value.length != 0){
            if(mail.value.length > 50){
                valido = false;
                error.innerHTML = "El mail no puede tener más de 60 caracteres";
                error.classList.remove("oculto");
            } else if (!mail.value.match(/^\S+@[a-z]+\.[a-z]/)) {
                valido = false;
                error.innerHTML = "El mail no tiene un formato válido";
                error.classList.remove("oculto");
            }
        }
        return valido;
    }

    let validarCelTel = () => {
        let valido = true;
        let error = document.getElementById("cel-error");
        let errorTel = document.getElementById("tel-error");
        error.classList.add("oculto");
        errorTel.classList.add("oculto");
        if(cel.value.length == 0 && tel.value.length == 0){
            valido = false;
            error.innerHTML = "Debe ingresar al menos un número de teléfono";
            error.classList.remove("oculto");
        } else {
            if(cel.value.length != 0){
                if (cel.value.length > 20) {
                    valido = false;
                    error.innerHTML = "El celular no puede tener más de 20 caracteres";
                    error.classList.remove("oculto");
                } else if (!cel.value.match(/^[0-9]+$/)) {
                    valido = false;
                    error.innerHTML = "El celular no puede tener letras";
                    error.classList.remove("oculto");
                }
            }
            if(tel.value.length != 0){
                if (tel.value.length > 20) {
                    valido = false;
                    errorTel.innerHTML = "El teléfono no puede tener más de 20 caracteres";
                    errorTel.classList.remove("oculto");
                } else if (!tel.value.match(/^[0-9]+$/)) {
                    valido = false;
                    errorTel.innerHTML = "El teléfono no tiene un formato válido";
                    errorTel.classList.remove("oculto");
                }
            }
        }
        return valido;
    }

    let validarLocalidad = () => {
        let valido = true;
        let error = document.getElementById("localidad-error");
        error.classList.add("oculto");
        if(localidad.value == ""){
            valido = false;
            error.innerHTML = "Debe seleccionar una opción";
            error.classList.remove("oculto");
        }
        return valido;
    }

    let validarCalle = () => {
        let valido = true;
        let error = document.getElementById("calle-error");
        error.classList.add("oculto");
        if(calle.value.length > 50){
            valido = false;
            error.innerHTML = "La calle no puede tener más de 50 caracteres";
            error.classList.remove("oculto");
        } else if (calle.value.length == 0) {
            valido = false;
            error.innerHTML = "La calle no puede estar vacía";
            error.classList.remove("oculto");
        }
        return valido;
    }

    let validarAltura = () => {
        let valido = true;
        let error = document.getElementById("altura-error");
        error.classList.add("oculto");
        if(altura.value.length > 6){
            valido = false;
            error.innerHTML = "La altura no puede tener más de 6 caracteres";
            error.classList.remove("oculto");
        }
        return valido;
    }

    let validarPiso = () => {
        let valido = true;
        let error = document.getElementById("piso-error");
        error.classList.add("oculto");
        if(piso.value.length > 3){
            valido = false;
            error.innerHTML = "El piso no puede tener más de 3 caracteres";
            error.classList.remove("oculto");
        }
        return valido;
    }

    function validarDpto(){
        let valido = true;
        let error = document.getElementById("dpto-error");
        error.classList.add("oculto");
        if(dpto.value.length > 3){
            valido = false;
            error.innerHTML = "El dpto no puede tener más de 3 caracteres";
            error.classList.remove("oculto");
        }
        return valido;
    }

    function camposValidos() {
        let todosValidos = true;
        //nombre - max 60 - requerido
        todosValidos = validarNombre() && todosValidos;
        //cuit - max 11 - solo numerico - requerido
        todosValidos = validarCuit() && todosValidos;
        //iva - requerido
        todosValidos = validarIVA() && todosValidos;
        //mail - max 50 - regex
        todosValidos = validarMail() && todosValidos;
        //cel y tel - max 20 - solo numerico - requerido uno al menos
        todosValidos = validarCelTel() && todosValidos;
        //localidad - requerido
        todosValidos = validarLocalidad() && todosValidos;
        //calle - max 50 - requerido
        todosValidos = validarCalle() && todosValidos;
        //altura max 6
        todosValidos = validarAltura() && todosValidos;
        //piso y dpto - max 3
        todosValidos = validarPiso() && todosValidos;
        todosValidos = validarDpto() && todosValidos;
        return todosValidos;
    }

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
                if(camposValidos()) {
                    const cliente = new Cliente(
                        cuit.value,
                        nombre.value,
                        cel.value,
                        tel.value,
                        mail.value.toLowerCase(),
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
            if(camposValidos()) {
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
            }
        };
    }

    btnCancelar.onclick = () => {
        window.location.href = "/public/clientes.html"
    }
};