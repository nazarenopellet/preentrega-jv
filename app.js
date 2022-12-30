let dni = Number(prompt("igrese su dni"))
let intentos = 3

function esMayor (dni){

    if (dni <= 46000000) {
        alert("usted es mayor, aceptado")
    
    }

    else {
        alert("usted es menor, denegado")
    }
    if (dni === ("")) {
        alert("no ingresaste nada, volve a intentarlo")
    }
}
while (intentos > 0) {

    alert("no ingresaste nada, te quedan " + intentos + " intentos")
    intentos--

}
if (intentos < 0) {
    alert(" usuario bloqueado")
}

esMayor(43199103)