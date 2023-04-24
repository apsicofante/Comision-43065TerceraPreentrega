let precioCafe = 300;
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