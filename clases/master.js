import { URL } from '../public/js/utils.js';

export class Master {
    async listarClientes() {
        const listaClientes = await fetch(URL + '/clientes')
        .then(response => response.json())
        .then(data => data.data)
        .then(datosClientes => datosClientes.map(cliente => {
            return {
                cuit: cliente.cuit,
                nombre_razon_social: cliente.nombre_razon_social,
                celular: cliente.celular,
                email: cliente.email
                };
            })
        );
        return listaClientes;
    }

    async buscarCliente(cuit) {
        const response = await fetch(URL + '/clientes/' + cuit)
            .then(response => response.json())
            .then(data => data.data);
        return response;
    }
}