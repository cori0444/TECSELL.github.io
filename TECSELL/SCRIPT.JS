/* =========================================
   INVENTARIO REAL DE TESELL
========================================= */

const inventario = [

    {
        id: 1,
        nombre: "Laptop Lenovo IdeaPad 3",
        stock: 15,
        precio: 12500
    },

    {
        id: 2,
        nombre: "Laptop HP Pavilion 15",
        stock: 12,
        precio: 14800
    },

    {
        id: 3,
        nombre: "Laptop Acer Aspire 5",
        stock: 10,
        precio: 13200
    },

    {
        id: 4,
        nombre: "Laptop ASUS VivoBook 15",
        stock: 8,
        precio: 13900
    },

    {
        id: 5,
        nombre: "Laptop Dell Inspiron 15",
        stock: 7,
        precio: 15600
    },

    {
        id: 6,
        nombre: "PC Gamer CREATEC Alpha",
        stock: 6,
        precio: 24500
    },

    {
        id: 7,
        nombre: "PC Gamer CREATEC Shadow",
        stock: 5,
        precio: 28900
    },

    {
        id: 8,
        nombre: "PC Oficina CREATEC Basic",
        stock: 18,
        precio: 9800
    },

    {
        id: 9,
        nombre: "PC Oficina CREATEC Pro",
        stock: 10,
        precio: 13700
    },

    {
        id: 10,
        nombre: "Monitor LG 24 pulgadas",
        stock: 20,
        precio: 4200
    },

    {
        id: 11,
        nombre: "Monitor Samsung 27 pulgadas",
        stock: 14,
        precio: 5800
    },

    {
        id: 12,
        nombre: "Teclado Logitech K120",
        stock: 30,
        precio: 450
    },

    {
        id: 13,
        nombre: "Teclado Logitech K380",
        stock: 18,
        precio: 850
    },

    {
        id: 14,
        nombre: "Mouse Logitech M90",
        stock: 35,
        precio: 280
    },

    {
        id: 15,
        nombre: "Mouse Logitech G203",
        stock: 16,
        precio: 950
    },

    {
        id: 16,
        nombre: "Audífonos HyperX Cloud Stinger",
        stock: 12,
        precio: 1250
    },

    {
        id: 17,
        nombre: "Webcam Logitech C270",
        stock: 15,
        precio: 1100
    },

    {
        id: 18,
        nombre: "Disco SSD Kingston 480GB",
        stock: 22,
        precio: 950
    },

    {
        id: 19,
        nombre: "Memoria RAM Kingston 16GB",
        stock: 18,
        precio: 1250
    },

    {
        id: 20,
        nombre: "Router TP-Link Archer C6",
        stock: 11,
        precio: 1350
    }

];


/* =========================================
   ELEMENTOS HTML
========================================= */

const loginScreen =
    document.getElementById("loginScreen");

const app =
    document.getElementById("app");

const loginForm =
    document.getElementById("loginForm");

const loginError =
    document.getElementById("loginError");

const logoutButton =
    document.getElementById("logoutButton");

const searchInput =
    document.getElementById("searchInput");

const filterSelect =
    document.getElementById("filterSelect");

const clearButton =
    document.getElementById("clearButton");

const inventoryBody =
    document.getElementById("inventoryBody");

const noResults =
    document.getElementById("noResults");

const resultsCount =
    document.getElementById("resultsCount");

const totalProducts =
    document.getElementById("totalProducts");

const lowStock =
    document.getElementById("lowStock");

const highPrice =
    document.getElementById("highPrice");


/* =========================================
   OBTENER CATEGORÍA
========================================= */

function obtenerCategoria(nombre) {

    if (nombre.startsWith("Laptop")) {
        return "Laptops";
    }

    if (nombre.startsWith("PC Gamer")) {
        return "PC Gamer";
    }

    if (nombre.startsWith("PC Oficina")) {
        return "PC Oficina";
    }

    if (nombre.startsWith("Monitor")) {
        return "Monitores";
    }

    if (nombre.startsWith("Teclado")) {
        return "Teclados";
    }

    if (nombre.startsWith("Mouse")) {
        return "Mouse";
    }

    if (nombre.startsWith("Audífonos")) {
        return "Audio";
    }

    if (nombre.startsWith("Webcam")) {
        return "Webcams";
    }

    if (nombre.startsWith("Disco SSD")) {
        return "Almacenamiento";
    }

    if (nombre.startsWith("Memoria RAM")) {
        return "Memoria RAM";
    }

    if (nombre.startsWith("Router")) {
        return "Redes";
    }

    return "Otros";
}


/* =========================================
   FORMATO DE PRECIO
========================================= */

function formatoPrecio(precio) {

    return new Intl.NumberFormat("es-MX", {

        style: "currency",

        currency: "MXN",

        maximumFractionDigits: 0

    }).format(precio);

}


/* =========================================
   ESTADO DEL STOCK
========================================= */

function obtenerEstadoStock(stock) {

    if (stock < 10) {

        return {

            texto: "Stock bajo",

            badge: "badge-danger",

            stockClass: "stock-low"

        };

    }


    if (stock < 20) {

        return {

            texto: "Stock medio",

            badge: "badge-warning",

            stockClass: "stock-medium"

        };

    }


    return {

        texto: "Disponible",

        badge: "badge-good",

        stockClass: "stock-good"

    };

}


/* =========================================
   MOSTRAR INVENTARIO
========================================= */

function mostrarInventario(productos) {

    inventoryBody.innerHTML = "";


    if (productos.length === 0) {

        noResults.classList.remove("hidden");

        resultsCount.textContent =
            "Mostrando 0 productos";

        return;

    }


    noResults.classList.add("hidden");


    productos.forEach(producto => {

        const estado =
            obtenerEstadoStock(producto.stock);


        const categoria =
            obtenerCategoria(producto.nombre);


        const fila =
            document.createElement("tr");


        fila.innerHTML = `

            <td>
                ${producto.id}
            </td>

            <td>
                <span class="product-name">
                    ${producto.nombre}
                </span>
            </td>

            <td>
                <span class="category">
                    ${categoria}
                </span>
            </td>

            <td>
                <span class="price">
                    ${formatoPrecio(producto.precio)}
                </span>
            </td>

            <td>
                <span class="stock ${estado.stockClass}">
                    ${producto.stock}
                </span>
            </td>

            <td>
                <span class="badge ${estado.badge}">
                    ${estado.texto}
                </span>
            </td>

        `;


        inventoryBody.appendChild(fila);

    });


    const cantidad =
        productos.length;


    resultsCount.textContent =
        `Mostrando ${cantidad} producto${cantidad === 1 ? "" : "s"}`;

}


/* =========================================
   ACTUALIZAR ESTADÍSTICAS
========================================= */

function actualizarEstadisticas() {

    totalProducts.textContent =
        inventario.length;


    const productosStockBajo =
        inventario.filter(
            producto => producto.stock < 10
        );


    lowStock.textContent =
        productosStockBajo.length;


    const productosPrecioAlto =
        inventario.filter(
            producto => producto.precio > 1500
        );


    highPrice.textContent =
        productosPrecioAlto.length;

}


/* =========================================
   FILTRAR INVENTARIO
========================================= */

function filtrarInventario() {

    const texto =
        searchInput.value
            .toLowerCase()
            .trim();


    const filtro =
        filterSelect.value;


    const productosFiltrados =
        inventario.filter(producto => {


            /*
             * BUSCADOR
             */

            const nombre =
                producto.nombre.toLowerCase();


            const categoria =
                obtenerCategoria(producto.nombre)
                    .toLowerCase();


            const coincideBusqueda =
                nombre.includes(texto)
                ||
                categoria.includes(texto);


            if (!coincideBusqueda) {

                return false;

            }


            /*
             * FILTROS DEL PROYECTO
             */

            switch (filtro) {


                case "stock10":

                    return producto.stock < 10;


                case "stock20":

                    return producto.stock < 20;


                case "priceHigh":

                    return producto.precio > 1500;


                case "priceLow":

                    return producto.precio < 1500;


                case "all":

                default:

                    return true;

            }

        });


    mostrarInventario(productosFiltrados);

}


/* =========================================
   LOGIN
========================================= */

loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const username =
            document
                .getElementById("username")
                .value
                .trim();


        const password =
            document
                .getElementById("password")
                .value;


        /*
         * CREDENCIALES DE DEMOSTRACIÓN
         */

        const usuarioCorrecto =
            username === "empleado";


        const passwordCorrecta =
            password === "1234";


        if (
            usuarioCorrecto
            &&
            passwordCorrecta
        ) {

            loginScreen.classList.add("hidden");

            app.classList.remove("hidden");

            loginError.textContent = "";


            mostrarInventario(inventario);

            actualizarEstadisticas();

        }

        else {

            loginError.textContent =
                "Usuario o contraseña incorrectos.";

        }

    }
);


/* =========================================
   CERRAR SESIÓN
========================================= */

logoutButton.addEventListener(
    "click",
    function() {

        app.classList.add("hidden");

        loginScreen.classList.remove("hidden");


        loginForm.reset();


        searchInput.value = "";

        filterSelect.value = "all";


        loginError.textContent = "";

    }
);


/* =========================================
   EVENTOS DEL BUSCADOR
========================================= */

searchInput.addEventListener(
    "input",
    filtrarInventario
);


/* =========================================
   EVENTO DEL SELECT
========================================= */

filterSelect.addEventListener(
    "change",
    filtrarInventario
);


/* =========================================
   LIMPIAR FILTROS
========================================= */

clearButton.addEventListener(
    "click",
    function() {

        searchInput.value = "";

        filterSelect.value = "all";

        filtrarInventario();

    }
);


/* =========================================
   INICIALIZACIÓN
========================================= */

actualizarEstadisticas();