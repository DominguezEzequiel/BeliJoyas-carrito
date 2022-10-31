const abrirCarrito = () => {
    cuerpoCarrito.innerHTML = '';

    cuerpoCarrito.style.display = 'flex';
    const carritoHeader = document.createElement('div');
    carritoHeader.className = 'carritoHeader';
    carritoHeader.innerHTML = `
    <h2 class="carrito-titulo">TUS COMPRAS</h2>
    `;
    cuerpoCarrito.append(carritoHeader);

    /* Creo botón "X" para cerrar el carrito */

    const cerrarCarrito = document.createElement("button");
    cerrarCarrito.innerHTML = `<i class="fa-sharp fa-solid fa-circle-xmark"></i>`;
    carritoHeader.append(cerrarCarrito);

    cerrarCarrito.addEventListener("click", () => {
        cuerpoCarrito.style.display = 'none';
    });

    /* Creo el cuerpo del modal, recorriendo el array carrito */

    carrito.forEach((product) => {
        let carritoBody = document.createElement('div');
        carritoBody.className = "carritoLista"
        carritoBody.innerHTML = `
        <img src="${product.img}">
        <p>${product.nombre}</p>
        <p>$${product.precio}</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio} $</p>
        <span class="eliminarProducto"> X </span>
    `

        cuerpoCarrito.append(carritoBody);

        let restar = carritoBody.querySelector(".restar");

        restar.addEventListener('click', () => {
            if (product.cantidad !== 1) {
                product.cantidad--;
            }
            abrirCarrito();
            localSave();
        });

        let sumar = carritoBody.querySelector(".sumar");

        sumar.addEventListener('click', () => {
            product.cantidad++;
            contadorCarrito();
            localSave();
            abrirCarrito();
        });

        let eliminar = carritoBody.querySelector(".eliminarProducto");
        eliminar.addEventListener('click', () => {
            eliminarProducto(product.id);
            contadorCarrito();
            localSave();
        });
    });



    /* Creo el footer del modal con el metodo reduce para calcular el total */
    const total = carrito.reduce((acc, e) => acc + e.precio * e.cantidad, 0)
    const carritoFooter = document.createElement("div")
    carritoFooter.className = "carritoFooter";
    carritoFooter.innerHTML = `
    <h2>PRECIO FINAL:</h2> 
    <h2> $${total}</h2>
    `;
    cuerpoCarrito.append(carritoFooter);
};

verCarrito.addEventListener("click", abrirCarrito);

/* Función "Eliminar producto" */

const eliminarProducto = (id) => {
    const selecId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== selecId;
    });
    contadorCarrito();
    localSave();
    abrirCarrito();
};

let contadorCarrito = () => {
    cantidadCarrito.style.display = "block";

    let carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
contadorCarrito();

