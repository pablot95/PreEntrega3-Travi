const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const renderProductos = (arrayProductos) => {
    let container = document.getElementById("containerPrincipal");
    container.innerHTML = "";

    arrayProductos.forEach((producto) => {

    let productCard = document.createElement("div")

    productCard.className = "productCard"

    productCard.innerHTML = `<img src="${producto.image}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.description}</p>
        <p>Precio: $${producto.precio}</p>
        <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
    `;

    container.appendChild(productCard);
    })
};

const eliminarDelCarrito = ((id) => {

    let carritoActualizado = carrito.filter((producto) => producto.id !== id);

    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));

    carrito.length = 0;
    carrito.push(...carritoActualizado);

    renderProductos (carrito);
})
renderProductos (carrito);