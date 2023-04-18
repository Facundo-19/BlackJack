let cartas = [];
let suma = 0;
let tieneBlackjack = false;
let sigueVivo = false;
let mensaje = "";
let mensajeEl = document.getElementById("mensaje-el");
let sumaEl = document.getElementById("suma-el");
let cartasEl = document.getElementById("cartas-el");

function obtenerCartaAleatoria() {
    let cartaAleatoria = Math.floor( Math.random() * 13) + 1;
    if (cartaAleatoria === 1) {
        return 11;
    } else if (cartaAleatoria > 10) {
        return 10;
    } else {
        return cartaAleatoria;
    }
}

function empezarJuego() {
    sigueVivo = true;
    let primerCarta = obtenerCartaAleatoria();
    let segundaCarta = obtenerCartaAleatoria();
    cartas = [primerCarta, segundaCarta];
    suma = primerCarta + segundaCarta;
    renderizarJuego();
}

function renderizarJuego() {
    cartasEl.textContent = "Cartas: ";
    for (i = 0; i < cartas.length; i++) {
        cartasEl.textContent += `${cartas[i]} `
    }
    sumaEl.textContent = `Suma: ${suma}`;
    if (suma < 21) {
        mensaje = "Queres otra carta?";
    } else if (suma === 21) {
        mensaje = "Felicitaciones! Tenes Blakjack";
        tieneBlackjack = true;
    } else {
        mensaje = "Perdiste :(";
        sigueVivo = false;
    }
    mensajeEl.textContent = mensaje;
}

function nuevaCarta() {
    if( sigueVivo === true && tieneBlackjack === false ) {
        let carta = obtenerCartaAleatoria();
        suma += carta;
        cartas.push(carta)
        renderizarJuego();
    }
}