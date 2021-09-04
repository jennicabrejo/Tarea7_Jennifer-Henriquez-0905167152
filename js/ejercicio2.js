const productos = [
    { nombre: "Leche Descremada", categoria: "Lacteos", precio: "13" },
    { nombre: "Queso Crema", categoria: "Lacteos", precio: "23" },
    { nombre: "Yogurt", categoria: "Lacteos", precio: "6" },
    { nombre: "Galleta Oreo", categoria: "Snacks", precio: "26" },
    { nombre: "Cocholate Ferrero", categoria: "Snacks", precio: "45" },
    { nombre: "Sabritas", categoria: "Snacks", precio: "5" },
];

const totalByCategoria = function(productos, categoria) {
    const DefinirCategoria = function DefinirCategoria(prod) {
        let totalProducto = prod.categoria === categoria;
        return totalProducto;
    };
    const sumaProductos = function sumaProductos(prodAnterior, prodActual) {
        let cantidad = prodAnterior + parseInt(prodActual.precio, 0);
        return cantidad;
    };
    let filtrando = productos.filter(DefinirCategoria).reduce(sumaProductos, 0);
    console.log(filtrando);
    return filtrando;
};

const cat = "Lacteos";
console.log('totalByCategoria(productos,' + cat + ')');

const array = productos.map(function(p) {
    return '<li>NOMBRE:   ' + p.nombre + '   CATEGORIA:    ' + p.categoria + '   PRECIO:   ' + p.precio + '</li>';
});


let container = document.querySelector('#app').innerHTML = ('[' + array + ']' + '<br> El resultado de la sumatoria  de la cateogoria' + ' ' + cat + ' ' +
    'es: ' +
    totalByCategoria(productos, cat));