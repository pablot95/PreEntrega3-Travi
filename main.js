
const productos = [
    {
        id: 1,
        image: "https://via.placeholder.com/1000",
        nombre: "Tiana mug rosa",
        description: "Tumbler marca Tiana color rosa",
        precio: 22000,
    },
    {
        id: 2,
        image: "https://via.placeholder.com/1000",
        nombre: "Tiana mug gris",
        description: "Tumbler marca Tiana color gris",
        precio: 22000,
    },
    {
        id: 3,
        image: "https://via.placeholder.com/1000",
        nombre: "Tiana mug negra",
        description: "Tumbler marca Tiana color negro",
        precio: 22000,
    },
    {
        id: 4,
        image: "https://via.placeholder.com/1000",
        nombre: "Tiana mug blanca",
        description: "Tumbler marca Tiana color blanco",
        precio: 22000,
    },
    {
        id: 5,
        image: "https://via.placeholder.com/1000",
        nombre: "Tiana mug lila",
        description: "Tumbler marca Tiana color lila",
        precio: 22000,
    },
    {
        id: 6,
        image: "https://via.placeholder.com/1000",
        nombre: "Tiana mug azul",
        description: "Tumbler marca Tiana color azul",
        precio: 22000,
    },
    {
        id: 7,
        image: "https://via.placeholder.com/1000",
        nombre: "Tiana mug marron claro",
        description: "Tumbler marca Tiana color marron claro",
        precio: 22000,
    },
    {
        id: 8,
        image: "https://via.placeholder.com/1000",
        nombre: "Tiana mug azul marino",
        description: "Tumbler marca Tiana color azul marino",
        precio: 22000,
    },

]

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];


const renderProductos = (arrayProductos) => {
    let container = document.getElementById("containerPrincipal");
    container.innerHTML = "";

    arrayProductos.forEach((producto) => {

    let productCard = document.createElement("div")

    productCard.className = "productCard"

    productCard.innerHTML = 
        `<img src="${producto.image}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.description}</p>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
    `;

    container.appendChild(productCard);
    })
};

const agregarAlCarrito = (id) => {
let productoCarrito = productos.find((elemento) => elemento.id ===id);

carrito.push(productoCarrito)

localStorage.setItem('carrito', JSON.stringify(carrito));
};

const buscar = document.getElementById("Buscar")

if (buscar){
    buscar.addEventListener("input", (evento) => {
        let value = evento.target.value.toLowerCase();
        let arrayFiltrado = productos.filter((producto) => 
            producto.nombre.toLowerCase().includes(value)
    );
    renderProductos(arrayFiltrado)
    });
}

renderProductos(productos)