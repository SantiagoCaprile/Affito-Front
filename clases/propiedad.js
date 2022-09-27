import { URL } from '../public/js/utils.js';

export class Propiedad {
    constructor(descripcion, dimension, tipo, calle, altura, piso, dpto, localidad, estado, precio, moneda, cliente=null) {
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
    // editarPropiedad() {
    //     const data = {
    //         descripcion: this.descripcion,
    //         dimension: this.dimension,
    //         tipo: this.tipo,
    //         domicilio: this.domicilio,
    //         estado: this.estado,
    //         precio: this.precio,
    //         moneda: this.moneda,
    //         cliente: this.cliente
    //     };
    //     fetch(/*URL*/ "http://localhost:5000" + "/propiedades/" + this.cod_prop, {
    //         method: 'PUT', // or 'PUT'
    //         body: JSON.stringify(data), // data can be string or {object}!
    //         headers:{
    //           'Content-Type': 'application/json'
    //         }
    //       }).then(res => res.json())
    //       .catch(error => console.error('Error:', error))
    //       .then(response => console.log('Success:', response));
    // }
}
