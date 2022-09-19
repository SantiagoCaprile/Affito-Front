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

    async listarPropiedades() {
        const listaPropiedades = await fetch(/*URL*/ "http://localhost:5000" + '/propiedades')
        .then(response => response.json())
        .then(data => data.data)
        .then(datosPropiedades => datosPropiedades.map(prop => {
            return {
                tipo: prop.tipo,
                dimension: prop.dimension,
                domicilio: prop.domicilio,
                precio: prop.precio,
                moneda: prop.moneda,
                estado: prop.estado,
                };
            })
        );
        return listaPropiedades;
    }
}