const tiendaProductos = document.getElementById("tiendaProductos");
const verCarrito = document.getElementById("verCarrito");
const cuerpoCarrito = document.getElementById("carritoModal");

let carrito = [];

/* Recorro el array productos para agregar cada objeto a mi HTML */
productos.forEach((product) => {
    let content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>$ ${product.precio}</p>
    `;

    /* Creo el botón "Agregar al carrito" */

    let comprar = document.createElement("button");
    comprar.innerText = "Agregar al carrito";
    comprar.className = "comprarBtn";
    content.append(comprar);

    content.className = "producto";
    tiendaProductos.append(content);

    /* Agrego función para agregar el producto al array carrito */

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio
        });
    });
});

