import { URL } from '../public/js/utils.js';

export class Master {
    async listarClientes() {
        const response = await fetch(URL + '/clientes');
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