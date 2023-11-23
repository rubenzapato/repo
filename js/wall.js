// Seleccionar los elementos HMTL.
const input = document.getElementById('ingresar-comentario');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-comentarios');

boton.addEventListener('click', agregarcomentario);
input.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    agregarcomentario();
  }
});


function agregarcomentario() {
  if (input.value) {
    let comenNuevo = document.createElement('div');
    comenNuevo.classList.add('tarea');
  
    let texto = document.createElement('p');
    texto.innerText = input.value;
    comenNuevo.appendChild(texto);

    listaDeTareas.appendChild(comenNuevo);
  } else {
    alert('Por favor ingresa una tarea.');
  }
}


