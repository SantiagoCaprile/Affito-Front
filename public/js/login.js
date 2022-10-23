async function usuarioValido(user, pass) {
    try {
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
    } catch (error) {
        return false;
    }
}

window.onload = function() {
    const btn = document.getElementById('btn-login');
    const error = document.getElementById('error');
    const user = document.getElementById('user');
    const password = document.getElementById('pass')

    user.onfocus = function() {
        error.classList.add('invisible');
        user.classList.remove('is-invalid');
    }
    password.onfocus = function() {
        error.classList.add('invisible');
        password.classList.remove('is-invalid');
    }

    btn.addEventListener('click', async(e) => {
        e.preventDefault();
        const valid = await usuarioValido(user.value, password.value);
        if (valid) {
            sessionStorage.setItem('user', user.value);
            window.location.href = './index.html';
        } else {
            user.classList.add('is-invalid');
            password.classList.add('is-invalid');
            error.classList.remove('invisible');
        }
    });
}