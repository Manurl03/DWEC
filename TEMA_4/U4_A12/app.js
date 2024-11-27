var listaCompras = [];

function mostrarLista() {
    document.getElementById('lista').innerHTML = listaCompras;
}

function agregarLista(){
    var articulo = document.getElementById('articulo').value;
    if (articulo !== '') {
        listaCompras.push(articulo);
        document.getElementById('articulo').value = ' ';
        mostrarLista();
    }
}

function eliminarPrimeroLista(){
    if (listaCompras.length > 0) {
        listaCompras.shift();
        mostrarLista();
    }
}

function eliminarUltimoLista(){
    if (listaCompras.length > 0) {
        listaCompras.pop();
        mostrarLista();
    }
}

function mostrarTresPrimeros(){
    var primeros3 = listaCompras.slice(0, 3);
    document.getElementById('lista').innerHTML = 
    `Los primeros 3 artículos de la lista son: ${primeros3.join(', ')}`;
}