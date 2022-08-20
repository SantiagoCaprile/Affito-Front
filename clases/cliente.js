export class Cliente {
    constructor(cuit, nombre_razon_social, celular, telefono, email, condicion_iva, calle, altura, piso, dpto, localidad) {
      this.cuit = cuit;
      this.nombre_razon_social = nombre_razon_social;
      this.celular = celular;
      this.telefono = telefono;
      this.email = email;
      this.condicion_iva = condicion_iva;
      this.calle = calle;
      this.altura = altura;
      this.piso = piso;
      this.dpto = dpto;
      this.localidad = localidad;
    }
    guardarCliente() {
        const data = {cuit: cuit, nombre_razon_social: nombre_razon_social};
        fetch("/api/v1/clientes", {
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