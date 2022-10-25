let tienda = document.getElementById("tiendaProductos");
let verCarrito = document.getElementById("verCarrito");
let modalCarrito = document.getElementById("carritoModal");
let cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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
    tiendaProductos.append(content)

    /* Agrego función para agregar el producto al array carrito */

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio
        });
        contadorCarrito();
        localSave();
        verCarrito();
    });

});


/* Creo función para mostrar el contador de productos del carrito */

const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";

    let carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

contadorCarrito();

const localSave = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

