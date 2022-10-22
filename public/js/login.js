async function usuarioValido(user, pass) {
    const response = await fetch('http://localhost:5000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: user,
            password: pass
        })
    })
    .then(response => response.json())
    .then(data => data.valid);//valid va a ser true o false
    return response;
}

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
        const valid = await usuarioValido(user.value, password.value);
        if (valid) {
            sessionStorage.setItem('user', user.value);
            window.location.href = './index.html';
        } else {
            error.classList.remove('oculto');
        }
    });
}