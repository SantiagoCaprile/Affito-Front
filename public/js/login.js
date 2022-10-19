window.onload = function() {
    const btn = document.getElementById('btn-login');
    const error = document.getElementById('error');
    const user = document.getElementById('user');
    const password = document.getElementById('pass')

    user.onfocus = function() {
        error.classList.add('oculto');
    }
    password.onfocus = function() {
        error.classList.add('oculto');
    }

    btn.addEventListener('click', async(e) => {
        e.preventDefault();
        if( user.value === 'admin' && password.value == 'adminpass' ) {
            window.location.href = './clientes.html';
        } else {
            error.classList.remove('oculto');
        }
    });

}