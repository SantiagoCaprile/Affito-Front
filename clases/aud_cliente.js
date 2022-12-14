import { URL } from '../public/js/utils.js';

const date = new Date();
export class aud_cliente {
  constructor(cuit, nombre_razon_social, celular, telefono, email, condicion_iva, calle, altura, piso, dpto, localidad, accion, fecha_accion) {
    this.cuit = cuit;
    this.nombre_razon_social = nombre_razon_social;
    this.celular = celular;
    this.telefono = telefono;
    this.email = email;
    this.condicion_iva = condicion_iva;
    this.domicilio = {
      calle: calle,
      altura: altura,
      piso: piso,
      dpto: dpto,
      localidad: localidad
    };
    this.accion = accion;
    this.fecha_accion = fecha_accion;
}
  guardarAudCliente() {
      const data = {
        cuit: this.cuit,
        nombre_razon_social: this.nombre_razon_social,
        celular: this.celular,
        telefono: this.telefono,
        email: this.email,
        condicion_iva: this.condicion_iva,
        domicilio: this.domicilio,
        accion: this.accion,
        fecha_accion: this.fecha_accion
      };
      fetch(URL + "/aud_clientes", {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be string or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
}