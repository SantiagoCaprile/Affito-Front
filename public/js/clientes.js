class Master {
    async listarClientes() {
        const url = '/api/v1/clientes';
        const response = await fetch(url);
        var data = await response.json();
        var clientes = data.data;

        clientes = clientes.map(cliente => {
            return {
            cuit: cliente.cuit,
            nombre_razon_social: cliente.nombre_razon_social,
            celular: cliente.celular,
            email: cliente.email
            };
        });
        return clientes;
    }
}
const master = new Master();

window.onload = function() {

    const table = document.getElementsByTagName('table')[0];
    async function llenarTabla(){
        const clientes = await master.listarClientes();
        const tbody = table.getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';
        for(var i = 0; i < clientes.length; i++) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${clientes[i].nombre_razon_social}</td>
                <td>${clientes[i].cuit}</td>
                <td>${clientes[i].celular}</td>
                <td>${clientes[i].email}    </td>
                <td><button id="cliente_${i}" class="btn-ver-mas">+</button></td>`;
            tbody.appendChild(tr);
        }
    }
    llenarTabla();

    document.querySelectorAll('btn-ver-mas').forEach(item => {
        item.addEventListener('click', event => {
          console.log("funciona")
        })
      })
}