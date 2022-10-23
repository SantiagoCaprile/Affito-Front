import { Master } from '../../clases/master.js'
const master = new Master();
if (sessionStorage.getItem('user') === null) {
    window.location.href = './logIn.html';
}

window.onload = function() {
    const tbody = document.querySelector('tbody');
    let mostrar_datos = async() => {
        let props = await master.listarPropiedades();
        tbody.innerHTML = '';
        for (let i = 0; i < props.length; i++) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = props[i]['tipo'];
            fila.insertCell().innerHTML = props[i]['dimension'] + " m&sup2;";
            fila.insertCell().innerHTML = props[i]['domicilio'].calle + " " +  props[i]['domicilio'].altura;
            fila.insertCell().innerHTML = props[i]['domicilio'].localidad;
            fila.insertCell().innerHTML = props[i]['precio'] + " " + props[i]['moneda'];
            fila.insertCell().innerHTML = `<button id=props${i} class="btn btn-outline-info rounded-circle btn-ver-mas">+</button>`
        }
        return props;
    };

    mostrar_datos()
        .then(function(props){
            const botonesMas = document.getElementsByClassName("btn-ver-mas");
            let data = {
                props: props,
                botonesMas: botonesMas
            }
            return data;
        })
        .then(function(data){
            const botonesMas = data.botonesMas;
            const props = data.props;
            for (let i = 0; i < botonesMas.length; i++) {
                botonesMas[i].onclick = function(){
                    window.location.href = `./infoPropiedad.html?id=${props[i]._id}`;
                }
            }
        })
        .catch(function(error){
            console.log(error);
        });

    const btnCerrarSesion = document.getElementById('btn-cerrar-sesion');
    btnCerrarSesion.addEventListener('click', function(){
        sessionStorage.removeItem('user');
        window.location.href = './logIn.html';
    });
}