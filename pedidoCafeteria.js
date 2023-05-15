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

function saludar () {
    alert ("Bienvenid@ a Restaurant The 80´s")
}
saludar ()
const productos = [
    {nombre: 'cafe', precio: 30, descripcion:"Cafe tostado espresso clasico"  },
	{nombre: 'latte', precio: 30, descripcion:"Cafe espresso con leche y espuma"  },
	{nombre: 'matcha', precio: 20, descripcion:"Te verde japones" },
	{nombre: 'submarino', precio: 25, descripcion:"Leche con una barra de fino chocolate disuelto" },
	{nombre: 'licuado', precio: 50, descripcion:"Licuado frutal a eleccion (con agua o leche)" },
    {nombre: 'medialuna', precio: 10, descripcion:"Dulces de grasa o saladas de manteca" },
    {nombre: 'tostado', precio: 15, descripcion:"Sandwich de jamon y queso con pan de miga o sacramento tostado" }
];

function inicio(){
    let pregunta = prompt ("¿Le interesa alguno de nuestros productos? (si/no)").toLowerCase();
    if (pregunta === "si"){
        mostrarProductos();
        inicio()
    }else {
        alert ("Muchas gracias por su tiempo ¡Vuelva pronto!")
    }
    
}
inicio()
function mostrarProductos () {
    let nombre = prompt("Ingrese el nombre del producto para ver la descripcion (Cafe, Latte, Matcha, Submarino, Licuado, Medialuna, Tostado)").toLowerCase();
    for(const producto of productos){
        if(producto.nombre.includes(nombre)){
         let mensaje = `
           Nombre: ${producto.nombre}
           Descripcion: ${producto.descripcion}
          $${producto.precio}
        `;
    
        alert(mensaje);
      }
    }
}
if (pregunta === "si"){
    mostrarProductos();
    inicio()
}else {
    alert ("Lamentamos no tener lo que ud desea")
}

 
