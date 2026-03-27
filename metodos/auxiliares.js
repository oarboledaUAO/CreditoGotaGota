function calcularCuota(prestamo, i, n){
    i = i/100
    let aux =Math.pow(1+i,n)
    let cuota = prestamo * ((aux * i) / (aux - 1))
    return cuota 
}

function listarDatos(info){
    let res ="Los clientes procesados fueron:\n"

    info.forEach(elemento => { res += "Nombre: "+elemento.nombre+
        ", Prestamo: " + elemento.prestamo+
        ", Meses: " +elemento.meses+ ", Interes: "+elemento.interes+
        ", Cuota: "+ (elemento.cuota).toFixed(2)+"\n" }        
    );

    return res
}

export {calcularCuota,listarDatos}