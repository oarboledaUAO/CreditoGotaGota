import {calcularCuota,listarDatos} from './auxiliares.js'

const btnCalcular = document.getElementById("calcular")
const btnRecordar = document.getElementById("recordar")
const taSalida = document.getElementById("resultadoPrestamo")

btnCalcular.addEventListener("click", IngresarCalculo)
btnRecordar.addEventListener("click", traerRecuerdo)

let historial =[]
function IngresarCalculo() {
    try {
        let nombre = document.getElementById("elNombre").value;
        let prestamo = parseInt(document.getElementById("elPrestamo").value);
        let meses = parseInt(document.getElementById("losMeses").value);
        let interes = parseFloat(document.getElementById("losIntereses").value);
        let cuota = calcularCuota(prestamo, interes, meses);

        if (nombre.trim() === '' || isNaN(prestamo) || isNaN(meses) || isNaN(interes)) {
            throw new Error('Ingresa un valor. :<')
        }


        taSalida.value = nombre + "  debe pagar $" + cuota.toFixed(2) +
            "  cada mes por el préstamo de $ " + prestamo + " a " + meses + " meses  con el interés del " + interes + "%"
        historial.push({ nombre, prestamo, meses, interes, cuota });
        console.log(historial)
    } catch (error) {
        taSalida.value = error.message
    }
}
/*
function IngresarCalculo(){ 
    let nombre= document.getElementById("elNombre").value;
    let prestamo= parseInt(document.getElementById("elPrestamo").value);
    let meses= parseInt(document.getElementById("losMeses").value);
    let interes= parseFloat(document.getElementById("losIntereses").value);
    let cuota= calcularCuota(prestamo,interes, meses);

    if (nombre.trim() === '' || isNaN(prestamo) || isNaN(meses) || isNaN(interes) ){
        taSalida.value = 'Ingresa un valor. :<'
        return
    }
    

    taSalida.value = nombre + "  debe pagar $" + cuota.toFixed(2) + 
    "  cada mes por el préstamo de $ " + prestamo + " a " + meses +  " meses  con el interés del "+interes+"%"
    historial.push({nombre, prestamo, meses, interes, cuota});
    console.log(historial)
}
*/

function traerRecuerdo(){
    taSalida.value = listarDatos(historial); 
}