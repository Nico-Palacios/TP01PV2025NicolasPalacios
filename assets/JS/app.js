
document.getElementById('miFormulario').addEventListener('submit', function(event){
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;
    alert(`Nombre: ` + nombre + `\nEmail: ` + email + `\nTelefono: ` + telefono + `\nComentario: ` + mensaje)
})



