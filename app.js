/*
DOM "Document object Model" = Se denomina como el 
conjunto que utilidad que se le puede dar a html 
por medio de JS
*/

//`document.querySelector` esto me permite el llamado y uso de una etiqueta 
//let titulo = document.querySelector(`h1`);
//Me permite el insertar dentro de la etiqueta un texto
//titulo.innerHTML = "Juego del nùmero secreto"

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Bloque de còdigo que permite ser llamado y ejecutado
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos == 1 ? "intento":"intentos" }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p',"El número secreto es menor");
        }
        else{
            asignarTextoElemento('p',"El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //Para identificar un ID dentro de "querySelector" se coloca una #
    //Forma rapida
    /*let valorcaja =*/ document.querySelector('#valorUsuario').value = '';
    //Forma larga 
    /*valorcaja.value = '';*/
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', "Ya se sortearon todos los números sorteados");
    }else{
        //Si el número generado está en incluida en la lista
        if(listaNumerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento(`h1`, "Juego del número Secreto");
    asignarTextoElemento(`p`, `Indica un nùmero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Dasabilidad el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales();
