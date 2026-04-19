// Funciones para gestionar productos en localStorage
function obtenerProductos() {
    const productos = localStorage.getItem('productos');
    return productos ? JSON.parse(productos) : [];
}

function guardarProductos(productos) {
    localStorage.setItem('productos', JSON.stringify(productos));
}

// Funciones para gestionar clientes en localStorage
function obtenerClientes() {
    const clientes = localStorage.getItem('clientes');
    return clientes ? JSON.parse(clientes) : [];
}

function guardarClientes(clientes) {
    localStorage.setItem('clientes', JSON.stringify(clientes));
}
