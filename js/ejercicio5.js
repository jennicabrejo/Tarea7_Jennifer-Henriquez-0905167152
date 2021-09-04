const numeros = [3, 34, 4, 12, 5, 2];
const dato = 9;
let resultado = [];
const EncontrarSuma = ((numeros, dato) => {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > dato) {
            continue;
        } else if (numeros.includes(dato - numeros[i])) {
            resultado.push(numeros[i]);
            resultado.push(dato - numeros[i]);
            break;
        }
    }
    return resultado;
});

console.log(numeros);
console.log(EncontrarSuma(numeros, dato));

function Datos() {
    let contendor = document.querySelector('#app');
    let html = `
    <p>Encontrar los valores que al sumarlos dan como resultado el numero 9.</p>
    Entrada: [${numeros}]<br> 
    Salida: [${EncontrarSuma(numeros)}]`;
    console.log(html);
    contendor.innerHTML = html;
}
Datos();