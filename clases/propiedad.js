import { URL } from '../public/js/utils.js';
import { Contrato } from './contrato.js';

export class Propiedad {
    constructor(descripcion, dimension, tipo, calle, altura,
        piso, dpto, localidad, estado, precio, moneda, cliente=null, contrato=[], id=null) {
        this.id = id;
        this.descripcion = descripcion;
        this.dimension = dimension;
        this.tipo = tipo;
        this.domicilio = {
            calle: calle,
            altura: altura,
            piso: piso,
            dpto: dpto,
            localidad: localidad
        }
        this.estado = estado;
        this.precio = precio;
        this.moneda = moneda;
        this.cliente = cliente;
        this.contratos = contrato;
    }
    guardarPropiedad() {
        const data = {
            descripcion: this.descripcion,
            dimension: this.dimension,
            tipo: this.tipo,
            domicilio: this.domicilio,
            estado: this.estado,
            precio: this.precio,
            moneda: this.moneda,
            cliente: this.cliente
        };
        fetch(/*URL*/ "http://localhost:5000" + "/propiedades", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be string or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    }

    actualizarPropiedad() {
        const data = {
            descripcion: this.descripcion,
            dimension: this.dimension,
            tipo: this.tipo,
            domicilio: this.domicilio,
            estado: this.estado,
            precio: this.precio,
            moneda: this.moneda,
            cliente: this.cliente,
            contrato: this.contratos
        };
        fetch(/*URL*/ "http://localhost:5000" + "/propiedades/" + this.id, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be string or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
    }

    async alquilarPropiedad(inquilinos, garantes, datosContrato) {
        if(this.estado === 'Disponible') {
            const contrato = new Contrato(this.id, this.cliente, inquilinos, garantes, datosContrato);
            const idContrato = await contrato.guardarContrato()
            // .then(data => data.data._id);
            this.estado = 'Alquilada';
            //guardar Id del contrato en propiedad
            this.contratos.push(idContrato);
            console.log(this);
            this.actualizarPropiedad();
            return true;
        } else {
            console.log('La propiedad no se encuentra disponible');
        }
    }
}