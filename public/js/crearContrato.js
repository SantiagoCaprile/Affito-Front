
window.onload = function() {
    let _id = window.location.search.split('=')[1];

    document.getElementById("btn-cancelar").onclick = (e) => {
        e.preventDefault();
        window.location.href = "infoPropiedad.html?id=" + _id;
    }

}