var listaTareas = [];

function controlador(numero) {
    switch (numero) {
        case 1:
            añadir();
            break;
        case 2:
            mostrarTodas();
            break;
        case 3:
            eliminarTarea();
            break;
        case 4:
            mostrarPorEstado(true);
            break;
        case 5:
            mostrarPorEstado(false);
            break;
        default:
            console.log("Opción no válida");
    }
}

function añadir() {
    var tarea = {
        nombre: '',
        estado: false,
    };
    tarea.nombre = document.getElementById('tarea').value;
    console.log(tarea);

    // Renderizar opciones para cambiar el estado
    document.getElementById('listaTareas').innerHTML = `
        <span>${tarea.nombre}</span>
        <button onclick="añadirEstado('${tarea.nombre}', true)">Sí</button>
        <button onclick="añadirEstado('${tarea.nombre}', false)">No</button>
    `;
}

function añadirEstado(nombre, estado) {
    var tarea = {
        nombre: nombre,
        estado: estado,
    };

    listaTareas.push(tarea);

    document.getElementById('listaTareas').innerHTML = `<p>Tarea <strong>"${nombre}"</strong> añadida con estado: <strong> ${estado ? 'Completada' : 'Pendiente'}</strong></p>`;

    console.log("Lista de tareas actualizada:", listaTareas);
}

function mostrarTodas(){
    document.getElementById('listaTareas').innerHTML = "";
    for (let tarea of listaTareas) {
        document.getElementById('listaTareas').innerHTML += `<p>Tarea: <strong>${tarea.nombre}</strong>, Estado: <strong>${tarea.estado ? 'Completada' : 'Pendiente'}</strong></p>`;
    }    
}

function mostrarPorEstado(estado){
    var listaFiltro = listaTareas.filter((tarea) => tarea.estado = estado);
    console.log(listaFiltro);
}