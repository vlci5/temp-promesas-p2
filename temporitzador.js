// Mismo módulo de la práctica 1 para hacer la práctica 2 Promesas.

//Primero, haremos nuestra función temporizador, recibe los milisegundos a temporizadorr antes de resolver
function temporizador(ms) {
  let promesa = new Promise((resolver, rechazar) => {
    let idTimeBien = setTimeout(() => resolver('Tiempo concluido'), ms);
    let idTimeMal = setTimeout(
      () => rechazar(Error('Tiempo no va bien')),
      ms * 2
    );
  });

  return promesa;
}

// metodo para escribir por pantalla nuestros mensajes, de forma que creamos un elemento nuevo
// y lo añadimos al elemento pasado por parámetro
// Si existe el elemento, lo añadimos al elemento existente

export function escribirEnPantalla(mensaje, elemento) {
  let parrafo = document.querySelector(elemento + '> p');
  if (parrafo !== '' && parrafo !== null) {
    parrafo.innerHTML = mensaje;
  } else {
    let texto = document.createElement('p');
    texto.appendChild(document.createTextNode(mensaje));
    document.querySelector(elemento).appendChild(texto);
  }
}

//function asíncrona para contar hacia atras, valores por parámetro:
// número de inicio cuenta atrás, elemento, intervalo, y una función callback que se ejecutaría al final
export async function cuenta(
  num,
  element = 'body',
  intval = 1000,
  escribirFinal
) {
  while (num >= 0) {
    await temporizador(intval);
    escribirEnPantalla(num--, element);
  }
  if (escribirFinal != undefined) escribirFinal();
}
