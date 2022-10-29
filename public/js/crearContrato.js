import { Master } from "../../clases/master.js";
import { Propiedad } from "../../clases/propiedad.js";

const master = new Master();

let _id = window.location.search.split('=')[1];


window.onload = function() {

    document.getElementById("btn-cancelar").onclick = (e) => {
        e.preventDefault();
        window.location.href = "infoPropiedad.html?id=" + _id;
    }

    document.getElementById("btn-crear-contrato").onclick = async (e) => {
        e.preventDefault();
        const datosContrato = {
            destino: document.getElementById("destino").value,
            fechaInicio: document.getElementById("fecha-inicio").value,
            fechaFin: document.getElementById("fecha-fin").value,
            monto: document.getElementById("monto").value,
            moneda: document.getElementById("moneda").value,
            interesMoraDiaria: document.getElementById("intereses-por-dia").value,
            comisionMensual: document.getElementById("comision-mensual").value,
            comisionCelebracion: document.getElementById("comision-celebracion").value,
            observaciones: document.getElementById("observaciones").value,
        }
        const inquilinos= 3 //cambiar cuando se pueda seleccionar, solo hay que agregar los ID
        const garantes= 4
        const ok = await master.alquilarPropiedad(_id, inquilinos, garantes, datosContrato)
        if (ok) {
            alert("Se ha creado el contrato correctamente");
            // window.location.href = "infoPropiedad.html?id=" + _id;
        } else {
            alert("Ha ocurrido un error");
        }
    }
        //usar funcion crearContrato de la clase master
        //mostrar alert de exito y console.log del contrato creado
        //redireccionar a infoPropiedad.html?id=...
}