///////////////////////////////PRIMER ENTREGA//////////////////////////////////////////////////////////////
/*let precioCafe = 300;
let precioMedialuna = 150;
let precioTorta = 250;
let precioTostada = 100;
let realizarPedido = prompt ("¿Desea realizar su pedido SI/NO").toLowerCase();
if (realizarPedido == "si"){
    let opcion = prompt ("Ingrese una opcion (1, 2, 3 para ordenar o 0 para salir)")
    while (opcion != 0 ) {
        switch (opcion) {
            case "1" : 
                let opcion1 = precioCafe + precioMedialuna ;
                alert ("Cafe + Medialuna =" + "$"+(opcion1)  + " ¡GRACIAS POR SU COMPRA!");
                break;
            case "2" :
                let opcion2 = precioCafe + precioTorta ;
                alert ("Cafe + porcion de torta =" + "$"+(opcion2) + " ¡GRACIAS POR SU COMPRA!");
                break;
            case "3" :
                let opcion3 = precioCafe + precioTostada ;
                alert ("Cafe + Tostada =" + "$"+(opcion3) + " ¡GRACIAS POR SU COMPRA!");
                break;
            default :
                alert ("Lamentamos no tener lo que ud desea");
                break;
        }
        opcion = prompt ("Ingrese una opcion (1, 2, 3 para ordenar o 0 para salir)");
    }
}else{ alert("¡Que tenga un buen dia!");
}
*/
////////////////////SEGUNDA ENTREGA///////////////////////////////////////////////////////////////////////////
/*function saludar() {
    alert("Bienvenid@ a Restaurant The 80´s")
}
saludar()
const productos = [
    { nombre: 'cafe', precio: 30, descripcion: "Cafe tostado espresso clasico" },
    { nombre: 'latte', precio: 30, descripcion: "Cafe espresso con leche y espuma" },
    { nombre: 'matcha', precio: 20, descripcion: "Te verde japones" },
    { nombre: 'submarino', precio: 25, descripcion: "Leche con una barra de fino chocolate disuelto" },
    { nombre: 'licuado', precio: 50, descripcion: "Licuado frutal a eleccion (con agua o leche)" },
    { nombre: 'medialuna', precio: 10, descripcion: "Dulces de grasa o saladas de manteca" },
    { nombre: 'tostado', precio: 15, descripcion: "Sandwich de jamon y queso con pan de miga o sacramento tostado" }
];

function inicio() {
    let pregunta = prompt("¿Le interesa alguno de nuestros productos? (si/no)").toLowerCase();
    if (pregunta === "si") {
        mostrarProductos();
        inicio()
    } else {
        alert("Muchas gracias por su tiempo ¡Vuelva pronto!")
    }

}
inicio()
function mostrarProductos() {
    let nombre = prompt("Ingrese el nombre del producto para ver la descripcion (Cafe, Latte, Matcha, Submarino, Licuado, Medialuna, Tostado)").toLowerCase();
    for (const producto of productos) {
        if (producto.nombre.includes(nombre)) {
            let mensaje = `
           Nombre: ${producto.nombre}
           Descripcion: ${producto.descripcion}
          $${producto.precio}
        `;

            alert(mensaje);
        }
    }
}
*/
//if (pregunta === "si"){
//mostrarProductos();
//inicio()                                          CODIGO ERRONEO (SOBRA)
//}else {
//alert ("Lamentamos no tener lo que ud desea")
//}

/////////////////////////TERCER ENTREGA///////////////////////////////////////////

class Producto {
  constructor(id, nombre, precio, descripcion, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.img = img;
    this.cantidad = 1;
  }
}

const cafe = new Producto(1, "CAFE", 300, "Cafe tostado espresso clasico", "assets/img/cafe-espresso.jpg");
const capuccino = new Producto(2, "CAPUCCINO", 450, "Cafe espresso con leche y espuma con una lluvia de cacao o canela", "assets/img/capuccino.jpg");
const latte = new Producto(3, "LATTE", 350, "Cafe espresso con leche y espuma", "assets/img/cafe-latte.jpg");
const matcha = new Producto(4, "MATCHA", 350,"Te verde japones", "assets/img/matcha-caliente.jpg");
const submarino = new Producto(5, "SUBMARINO", 400,"Leche con una barra de fino chocolate disuelto", "assets/img/submarino.jpg");
const licuado = new Producto(6, "LICUADO", 450,"Licuado frutal a eleccion (con agua o leche)", "assets/img/licuado.jpg");
const medialuna = new Producto(7, "MEDIALUNA", 100, "Dulces de grasa o saladas de manteca", "assets/img/medialuna.jpg");
const tostado = new Producto(8, "TOSTADO", 200, "Sandwich de jamon y queso con pan de miga o sacramento tostado", "assets/img/tostado.jpg");

const productos = [cafe, capuccino, latte, matcha, submarino, licuado, medialuna, tostado];

//Carrito Vacio
let carrito = [];

carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

// Mostrar productos en el DOM
const containerProductos = document.getElementById("containerProductos");

// Función para ver las cards de productos
const verProductos = () => {
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("col-xl-3", "col-md-6");
    card.innerHTML = `
      <div class="card">
        <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
        <div>
          <h5>${producto.nombre}</h5>
          <p>$${producto.precio}</p>
          <button class="btn colorBoton" id="boton${producto.id}" >Agregar al Pedido</button>
          <button class="btn colorBoton" id="boton${producto.descripcion}" >Ver Descripcion</button>
        </div>
      </div>
    `;
    containerProductos.appendChild(card);
    //Mostrar Descripcion del producto
    const descripcion = document.getElementById (`boton${producto.descripcion}`);
    descripcion.addEventListener ("click", () => {
      Swal.fire({
        title: `${producto.descripcion}`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    })
    
    // Variable Agregar productos al carrito
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      agregarProducto (producto.id);
    });
  });
};
verProductos();

// Función agregar 
const agregarProducto = (id) => {
  const productoCarrito = carrito.find((producto) => producto.id === id);
  if (productoCarrito) {
    productoCarrito.cantidad++;
  } else {
    const producto = productos.find((producto) => producto.id === id);
    carrito.push(producto);
  }
  calcularTotalCompra();
  // Guardar carrito en Storage
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// Mostrar el carrito
const containerPedido = document.getElementById("containerPedido");
const verPedido = document.getElementById("verPedido");

verPedido.addEventListener("click", () => {
  mostrarCarrito();
});

const mostrarCarrito = () => {
  containerPedido.innerHTML = "";
  carrito.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("col-xl-3", "col-md-6");
    card.innerHTML = `
      <div class="card">
        <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
        <div>
          <h5>${producto.nombre}</h5>
          <p>${producto.precio}</p>
          <p>${producto.cantidad}</p>
          <div>
            <button class="btn btn-danger" id="restar${producto.id}">-</button>
            <button class="btn btn-danger" id="sumar${producto.id}">+</button>
            <button class="btn colorBoton" id="eliminar${producto.id}">Eliminar</button>
          </div>
        </div>
      </div>
    `;
    containerPedido.appendChild(card);

    // Eliminar productos del carrito
    const botonEliminar = document.getElementById(`eliminar${producto.id}`);
    botonEliminar.addEventListener("click", () => {
      eliminarProductoDelCarrito(producto.id);
    });

    // Sumar producto al carrito
    const botonSumar = document.getElementById(`sumar${producto.id}`);
    botonSumar.addEventListener("click", () => {
      sumarProducto(producto.id);
    });

    // Restar producto del carrito
    const botonRestar = document.getElementById(`restar${producto.id}`);
    botonRestar.addEventListener("click", () => {
      restarProducto(producto.id);
    });
  });
  calcularTotalCompra();
};

// Funciones de sumar y restar productos
const sumarProducto = (id) => {
  const producto = carrito.find((producto) => producto.id === id);
  producto.cantidad++;
  mostrarCarrito();
  // Guardar carrito en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const restarProducto = (id) => {
  const producto = carrito.find((producto) => producto.id === id);
  if (producto.cantidad > 1) {
    producto.cantidad--;
    mostrarCarrito();
    // Guardar carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
  } else {
    eliminarProductoDelCarrito(id);
  }
};

// Función para eliminar producto del carrito
const eliminarProductoDelCarrito = (id) => {
  carrito = carrito.filter((producto) => producto.id !== id);
  mostrarCarrito();
  // Guardar carrito en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// Total de la compra
const total = document.getElementById("total");

const calcularTotalCompra = () => {
  let totalCompra = 0;
  carrito.forEach((producto) => {
    totalCompra += producto.precio * producto.cantidad;
  });
  total.innerHTML = `total: $${totalCompra}`;
};


// Finalizar compra
const finalizarCompra = document.getElementById("finalizarCompra");

finalizarCompra.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire("Error", "No hay productos en el pedido", "error");
  } else {
    Swal.fire("Felicitaciones", "Haz realizado tu compra", "success");
    eliminarTodoElPedido();
  }
});

// Vaciar el carrito
const vaciarPedido = document.getElementById("vaciarPedido");

vaciarPedido.addEventListener("click", () => {
  eliminarTodoElPedido();
});

const eliminarTodoElPedido = () => {
  carrito = [];
  mostrarCarrito();
  // Eliminar carrito del localStorage
  localStorage.removeItem("carrito");
};
