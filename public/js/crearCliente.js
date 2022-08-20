class Cliente {
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
        const data = {cuit: this.cuit, nombre_razon_social: this.nombre_razon_social, celular: this.celular, telefono: this.telefono,
            email: this.email, condicion_iva: this.condicion_iva, calle: this.calle, altura: this.altura, piso: this.piso, dpto: this.dpto, localidad: this.localidad};
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
    btn.addEventListener('click', function (e) {
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
        window.location.href = "/clientes.html"

    });
};