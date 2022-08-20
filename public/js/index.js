window.onload = function() {
    const url = '/api/v1/propiedades';
    const table = document.getElementsByTagName('table')[0];

    async function obtenerPropiedades() {
        const response = await fetch(url);
        var data = await response.json();
        var propiedades = data.data;
        
        propiedades = propiedades.map(propiedad => {
          return {
            cod_prop: propiedad.cod_prop,
            descripcion: propiedad.descripcion,
            dimension: propiedad.dimension,
            tipo: propiedad.tipo,
            domicilio: propiedad.domicilio,
            estado: propiedad.estado,
          };
        });

        for(var i = 0; i < propiedades.length; i++) {
          var resul = await fetch(`/api/v1/tipos/${propiedades[i].tipo}`);
          var data2 = await resul.json();
          propiedades[i].tipo = data2.data.tipo;
        }
        llenarTabla(propiedades);
        return propiedades;
    }
    obtenerPropiedades();

    function llenarTabla(pr){
        const propiedades = pr;
        const tbody = table.getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';
        propiedades.forEach(function (propiedad, index) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${propiedad.tipo}</td>
                <td></td>
                <td></td>
                <td>${propiedad.dimension} m&sup2;</td>
                <td>${propiedad.descripcion}</td>
                <td><button id="prop_${index}" class="btn-ver-mas">+</button></td>`;
            tbody.appendChild(tr);
        });
    }
    

        


    // cargarLocalidad = async () => {
    //   fetch("http://localhost:5000/api/v1/localidades")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log('data', data);
    //         let localidades = data.data;
    //         localidades.forEach(localidad => {
    //             let loc = document.createElement('p');
    //             loc.innerHTML = `${localidad.cod_postal} - ${localidad.nombre}`;
    //             body.appendChild(loc);
    //         });
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // };

    // cargarLocalidad();

}