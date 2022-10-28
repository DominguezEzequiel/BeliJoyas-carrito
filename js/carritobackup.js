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
       

        let eliminar = document.createElement("button");
        eliminar.innerHTML = `<i class="fa-sharp fa-solid fa-circle-xmark"></i>`
        eliminar.className = "eliminarProducto"
        carritoBody.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
        
        modalCarrito.append(carritoBody);
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

/* Función eliminar producto */

const eliminarProducto = () => {
    const selecId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== selecId;
    })

    verCarrito();
}