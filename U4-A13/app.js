var listaTareas = [];
var id = 1;

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
            mostrarPorEstado(false);
            break;
        case 5:
            mostrarPorEstado(true);
            break;
        default:
            console.log("Opción no válida");
    }
}

function añadir() {
    var tarea = {
        id: id,
        nombre: '',
        estado: false,
    };
    tarea.nombre = document.getElementById('tarea').value;

    document.getElementById('listaTareas').innerHTML = `
        <span>${tarea.nombre}</span>
        <button onclick="añadirEstado('${tarea.id}', '${tarea.nombre}', true)">Sí</button>
        <button onclick="añadirEstado('${tarea.id}', '${tarea.nombre}', false)">No</button>`;
    id++;
}

function añadirEstado(id, nombre, estado) {
    var tarea = {
        id: id,
        nombre: nombre,
        estado: estado,
    };

    listaTareas.push(tarea);

    document.getElementById('listaTareas').innerHTML = `<p>Tarea <strong>"${nombre}"</strong> añadida con estado: <strong> ${estado ? 'Completada' : 'Pendiente'}</strong></p>`;
}

function mostrarTodas(){
    document.getElementById('listaTareas').innerHTML = "";
    for (let tarea of listaTareas) {
        document.getElementById('listaTareas').innerHTML += `<p>ID: <strong>${tarea.id}</strong> Tarea: <strong>${tarea.nombre}</strong>, Estado: <strong>${tarea.estado ? 'Completada' : 'Pendiente'}</strong></p>`;
    }    
}

function eliminarTarea(){
    var codigo = document.getElementById('tarea').value;
    if (!isNaN(codigo)){
        listaTareas = listaTareas.filter(tarea => tarea.id !== codigo);
        document.getElementById('listaTareas').innerHTML = "";
        document.getElementById('listaTareas').innerHTML = 
        `La tarea con id: <strong>${codigo}</strong> ha sido eliminada correctamente`;
        document.getElementById('listaTareas').innerHTML = "Lista actualizada:";
        for (let tarea of listaTareas) {
            document.getElementById('listaTareas').innerHTML += `<p>ID: <strong>${tarea.id}</strong> Tarea: <strong>${tarea.nombre}</strong>, Estado: <strong>${tarea.estado ? 'Completada' : 'Pendiente'}</strong></p>`;
        }   
    } else {
        document.getElementById('listaTareas').innerHTML = "";
        document.getElementById('listaTareas').innerHTML = "La id no es un número";
    }
}

function mostrarPorEstado(estado){
    var listaFiltro = listaTareas.filter(tarea => tarea.estado == estado);
    document.getElementById('listaTareas').innerHTML = `<p>TAREAS <strong>${estado ? 'COMPLETADAS' : 'SIN COMPLETAR'}</strong></p>`
    for (let tarea of listaFiltro) {
        document.getElementById('listaTareas').innerHTML += `<p>ID: <strong>${tarea.id}</strong> Tarea: <strong>${tarea.nombre}</strong>, Estado: <strong>${tarea.estado ? 'Completada' : 'Pendiente'}</strong></p>`;
    }  
}