let tienda = document.getElementById("tiendaProductos");
let verCarrito = document.getElementById("verCarrito");
let modalCarrito = document.getElementById("carritoModal");
let cantidadCarrito = document.getElementById("cantidadCarrito");


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
    });

});

/* Creo modal para ver el carrito */

verCarrito.addEventListener("click", () => {

    modalCarrito.innerHTML = ''

    modalCarrito.style.display = "flex"
    const carritoHeader = document.createElement("div");
    carritoHeader.className = "carritoHeader";
    carritoHeader.innerHTML = `
    <h2 class="carrito-titulo">TUS COMPRAS</h2>
    `
    modalCarrito.append(carritoHeader);

    /* Creo botón "X" para cerrar el carrito */

    const cerrarCarrito = document.createElement("button");
    cerrarCarrito.innerHTML = `<i class="fa-sharp fa-solid fa-circle-xmark"></i>`;
    carritoHeader.append(cerrarCarrito);

    cerrarCarrito.addEventListener("click", () => {
        modalCarrito.style.display = "none"
    })

    /* Creo el cuerpo del modal, recorriendo el array carrito */

    carrito.forEach((product) => {
        let carritoBody = document.createElement("div")
        carritoBody.className = "carritoLista"
        carritoBody.innerHTML = `
        <img src="${product.img}">
        <p>${product.nombre}</p>
        <p>$${product.precio}</p>
    `
        modalCarrito.append(carritoBody)
    });

    /* Creo el footer del modal con el metodo reduce para calcular el total */
    const total = carrito.reduce((acc, e) => acc + e.precio, 0);

    const carritoFooter = document.createElement("div")
    carritoFooter.className = "carritoFooter";
    carritoFooter.innerHTML = `
    <h2>PRECIO FINAL:</h2> 
    <h2> $${total}</h2>
    `;
    modalCarrito.append(carritoFooter);
})

/* Creo función para mostrar el contador de productos del carrito */

const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
};

/* localstorage */

const localSave = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}