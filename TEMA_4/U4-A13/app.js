var listaTareas = [];

function controlador(numero){
    switch (numero) {
        case 1:
            añadir();
    }
}

function añadir(){
    var tarea = {
        nombre: '',
        estado: false,
    };
    tarea.nombre = document.getElementById('tarea').value;
    console.log(tarea)
    document.getElementById('listaTareas').innerHTML=
    `
      <span>${tarea.nombre}</span>
      <button onclick="añadirEstado(${tarea},${true})">Sí</button>
      <button onclick="añadirEstado(${tarea},${false})">No</button>
    `;
}

function añadirEstado(estado){
    tarea.estado = estado;
    listaTareas.push(tarea);
    console.log(listaTareas)
    document.getElementById('listaTareas').innerHTML = "";
}