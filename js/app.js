const tiendaProductos = document.getElementById("tiendaProductos");
const verCarrito = document.getElementById("verCarrito");
const cuerpoCarrito = document.getElementById("carritoModal");
const cantidadCarrito = document.getElementById("cantidadCarrito");

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
    tiendaProductos.append(content);

    /* Agrego función para agregar el producto al array carrito */

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad
            });
            contadorCarrito();
            localSave();
        }
;
    });
});

/* Creo función para mostrar el contador de productos del carrito */


const localSave = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
contadorCarrito();
