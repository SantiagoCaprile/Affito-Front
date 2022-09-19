import { Master } from '../../clases/master.js'

const master = new Master();

window.onload = function() {

    let _id = window.location.search.split('=')[1];

    let busqueda = async() => {
        let propiedad = await master.buscarPropiedad(_id);
        return propiedad;
    }

    busqueda()
    .then((propiedad) => {
        document.getElementById("domicilio").innerHTML = propiedad.domicilio.calle + " " + propiedad.domicilio.altura;
        document.getElementById("localidad").innerHTML = propiedad.domicilio.localidad;
        document.getElementById("tipo-prop").innerHTML = propiedad.tipo;
        document.getElementById("m2").innerHTML = propiedad.dimension + " m&sup2;";
        document.getElementById("descripcion").innerHTML = propiedad.descripcion;
        document.getElementById("precio-prop").innerHTML = propiedad.precio + " " + propiedad.moneda;
        document.getElementById("estado-prop").innerHTML = propiedad.estado;
        if(propiedad.contrato.length == 0){
            document.getElementsByTagName("table")[0].innerHTML = "No hay historial de contratos para esta propiedad";
        }
    }).catch(err => {
        console.log(err);
    });

    document.getElementById("btn-editar").onclick = () => {
        window.location.href = "crearPropiedad.html?id=" + _id;
    }

    document.getElementById("btn-volver").onclick = () => {
        window.location.href = "index.html";
    }
}