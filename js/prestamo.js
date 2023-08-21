
function calcular_prestamo( cantidad, cuotas){


    cantidad = parseFloat(cantidad);
    cuotas = parseInt(cuotas);

    let prestamo_final = 0;

    if(cuotas == 1 && cantidad > 0){


        return cantidad
    }
    else if(cuotas == 3 && cantidad > 0){

        prestamo_final  = cantidad + (cantidad * 0.10)

        return prestamo_final
    }
    else if(cuotas == 6 && cantidad > 0){
        prestamo_final = cantidad + (cantidad * 0.20)

        return prestamo_final
    }
    else if(cuotas == 9 && cantidad > 0){
        prestamo_final = cantidad + (cantidad * 0.30)

        return prestamo_final
    }
    else if(cuotas == 12 && cantidad > 0){
        prestamo_final = cantidad + (cantidad * 0.40)

        return prestamo_final

    }
    else if(cuotas == 24 && cantidad > 0){

        prestamo_final = cantidad + (cantidad * 0.80)

        return prestamo_final
    }


    





}













console.log("Bienvenidos/as a TU PRESTAMO IDEAL")


let cantidad = 0;

while( cantidad != "FINALIZAR"){

    cantidad = prompt("Ingrese la cantidad de dinero que usted requiera o FINALIZAR");

    if( cantidad !="FINALIZAR"){

        let cuotas = prompt("Ingrese la cantidad de cuotas que desea: 1, 3, 6, 9, 12 o 24");
        let Totalidad_prestamo = calcular_prestamo( cantidad, cuotas);
    
    
        console.log("Pediste la suma de: ", cantidad , " a pagar en un total de " , cuotas , " cuotas.");
        console.log("Devolverias un  total de:" , Totalidad_prestamo);
    




    }



}