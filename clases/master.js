import { URL } from '../public/js/utils.js';
import { Propiedad } from './propiedad.js';

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

    async filtrarClientes(filtro) {
        const listaClientes = await fetch(URL + '/clientes/filtro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filtro)
        })
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
    };

    async buscarCliente(cuit) {
        const response = await fetch(URL + '/clientes/' + cuit)
            .then(response => response.json())
            .then(data => data.data);
        return response;
    }

    async listarPropiedades() {
        const listaPropiedades = await fetch(/*URL*/ 'http://localhost:5000' + '/propiedades')
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
                _id: prop._id
                };
            })
        );
        return listaPropiedades;
    }

    async buscarPropiedad(_id) {
        const response = await fetch('http://localhost:5000' + '/propiedades/' + _id)
            .then(response => response.json())
            .then(data => data.data);
        return response;
    }

    async alquilarPropiedad(idPropiedad, inquilinos, garantes, datosContrato) {
        try {
            const prop = await this.buscarPropiedad(idPropiedad);
            const propiedad = new Propiedad(prop.descripcion, prop.dimension, prop.tipo, prop.domicilio.calle, prop.domicilio.altura,
                prop.domicilio.piso, prop.domicilio.dpto, prop.domicilio.localidad, prop.estado, prop.precio, prop.moneda, prop.cliente, prop.contrato, prop._id);
            return await propiedad.alquilarPropiedad(inquilinos, garantes, datosContrato);
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}