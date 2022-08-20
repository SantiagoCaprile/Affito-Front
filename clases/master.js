class Master {
    async listarClientes() {
        const url = '/api/v1/clientes';
        const response = await fetch(url);
        var data = await response.json();
        var clientes = data.data;

        clientes = clientes.map(cliente => {
            return {
            cuit: cliente.cuit,
            nombre_razon_social: cliente.nombre_razon_social
            };
        });
        return clientes;
    }
}